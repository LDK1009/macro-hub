import api from "@/lib/apiClient";
import { supabase } from "@/lib/supabaseClient";
import { UserType } from "@/types/auth/auth";
import { addDays, isAfter } from "date-fns";

////////// 로그인
export async function signIn() {
  const response = await supabase.auth.signInWithOAuth({
    provider: "kakao",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-in/success`,
    },
  });

  return response;
}

////////// 로그아웃
export async function signOut() {
  const response = await supabase.auth.signOut();

  return response;
}

////////// 회원탈퇴
export async function deleteUser(uid: string) {
  const response = await api.delete(`/users?uid=${uid}`);

  return response.data;
}

////////// 유저 로그인 여부 확인하기
export async function getCurrentUserIsSignIn() {
  const { error } = await supabase.auth.getUser();

  if (!error) {
    return true;
  } else {
    return false;
  }
}

////////// 현재 로그인한 유저정보 가져오기
export async function getCurrentUser() {
  const response = await supabase.auth.getUser();

  return response;
}

////////// 현재 로그인한 유저 uid 가져오기
export async function getCurrentUserUID() {
  const { data, error } = await supabase.auth.getUser();

  const response = {
    data: data.user?.id,
    error,
  };

  return response;
}

////////// 현재 로그인한 유저 이메일 가져오기
export async function getCurrentUserEmail() {
  const { data, error } = await supabase.auth.getUser();

  const response = {
    data: data.user?.email,
    error,
  };

  return response;
}

////////// 유저 생성
export async function createUser() {
  try {
    // 로그인 상태 확인
    const isSignIn = await getCurrentUser();

    if (!isSignIn) {
      return { data: "로그인 상태가 아닙니다.", error: null };
    }

    // 현재 로그인한 유저 정보 가져오기
    const {
      data: { user: userData },
    } = await getCurrentUser();

    // 현재 로그인한 유저 정보 비구조화
    const { id, email, created_at } = userData || {};

    // 이미 회원가입한 유저인지 체크
    const { data: isExistUserList } = await supabase.from("users").select("*").eq("uid", id);

    // 이미 회원가입한 유저라면 종료
    if (isExistUserList && isExistUserList.length > 0) {
      console.log("이미 회원가입한 유저입니다.", isExistUserList);
      return { data: "이미 회원가입한 유저입니다.", error: null };
    }

    // 유저 정보 없으면 종료
    if (!userData || !id || !created_at) {
      throw new Error("유저 정보 없음");
    }

    // 무료 구독권 날짜 계산
    const createDate = new Date(created_at);
    const firstTimeSubscriber = addDays(createDate, 7);

    // 유저 정보 생성
    const createUserData: UserType = {
      uid: id,
      email: email,
      subscription_period: firstTimeSubscriber,
      created_at: createDate,
    };

    // 유저 정보 생성
    await supabase.from("users").insert(createUserData);

    return { data: "유저 생성 성공", error: null };
  } catch {
    throw new Error("유저 생성 실패");
  }
}

////////// 구독 여부 확인
export async function readIsUserSubscribed() {
  try {
    ///// 현재 로그인한 유저의 uid 가져오기
    const { data: uid } = await getCurrentUserUID();

    if (!uid) {
      throw new Error("유저 uid 없음");
    }

    ///// UID와 일치하는 유저의 구독 기간 가져오기
    const { data: userSubscriptionData } = await supabase
      .from("users")
      .select("subscription_period")
      .eq("uid", uid)
      .single();

    // 구독 기간 비구조화
    const subscriptionPeriod = userSubscriptionData?.subscription_period;

    // 구독 기간 없으면 함수 종료
    if (!subscriptionPeriod) {
      throw new Error("구독 기간을 찾을 수 없습니다.");
    }

    ///// 구독 만료 여부 검증하기
    const subscriptionPeriodDate = new Date(subscriptionPeriod);
    const isSubscribeLived = isAfter(subscriptionPeriodDate, new Date());

    // 구독 만료 여부 반환
    return isSubscribeLived;
  } catch {
    throw new Error("구독 여부 확인 실패");
  }
}

