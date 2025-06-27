import { useLoadingRouter } from "@/hooks/useLoadingRouter";
import { mixinFlex } from "@/styles/mixins";
import { Box, Button, Card, CardContent, Container, Stack, styled, Typography } from "@mui/material";
import { Check, Star } from "@mui/icons-material";

const PricingSection = () => {
  const { navigateWithLoading } = useLoadingRouter();

  function goToRoute(route: string) {
    navigateWithLoading(route);
  }

  const allFeatures = [
    "오토프레스 - 24시 AI 블로그 자동화",
    "인스타그램 - 악플 자동삭제",
    "인스타그램 - DM 자동 답장",
    "인스타그램 - 댓글 DM 자동 답장",
    "24시간 연중무휴 고객지원",
  ];

  return (
    <PricingContainer>
      <Container maxWidth="lg">
        <HeaderStack>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{
              fontWeight: "bold",
              mb: 2,
              color: "white",
            }}
          >
            요금제 선택
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{
              opacity: 0.9,
              mb: 2,
              maxWidth: "600px",
              color: "white",
            }}
          >
            필요에 맞는 요금제를 선택하세요
          </Typography>
          <FreeTrialNotice>🎉 최초 회원가입 시 모든 기능을 7일간 무료로 이용하실 수 있습니다</FreeTrialNotice>
        </HeaderStack>

        <PricingGrid>
          {/* 무료 체험 */}
          <PricingCard elevation={4}>
            <CardContent sx={{ p: 4 }}>
              <PricingHeader>
                <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom color="primary.main">
                  무료 체험
                </Typography>
                <PriceContainer>
                  <Typography variant="h2" fontWeight="bold" color="primary.main">
                    ₩0
                  </Typography>
                </PriceContainer>
                <Typography variant="body1" color="primary.main" textAlign="center" fontWeight="bold">
                  첫 가입 후 7일간
                </Typography>
              </PricingHeader>

              <FeaturesDescription>
                <Typography variant="h6" fontWeight="bold" textAlign="center" gutterBottom color="primary.main">
                  모든 서비스 이용 가능
                </Typography>
                <FeaturesList>
                  {allFeatures.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check sx={{ color: "#4CAF50", mr: 2, fontSize: 20 }} />
                      <Typography variant="body1" color="primary.main">
                        {feature}
                      </Typography>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </FeaturesDescription>

              <ButtonContainer>
                <FreeButton variant="outlined" size="large" onClick={() => goToRoute("/auth/sign-in")}>
                  무료로 시작하기
                </FreeButton>
              </ButtonContainer>
            </CardContent>
          </PricingCard>

          {/* 구독권 */}
          <PricingCard elevation={8} sx={{ position: "relative" }}>
            <PopularBadge>
              <Star sx={{ fontSize: 16, mr: 0.5 }} />
              추천
            </PopularBadge>
            <CardContent sx={{ p: 4 }}>
              <PricingHeader>
                <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom color="primary.main">
                  구독권
                </Typography>
                <PriceContainer>
                  <Typography variant="h2" fontWeight="bold" color="primary.main">
                    ₩30,000
                  </Typography>
                  <Typography variant="h6" color="primary.main">
                    /월
                  </Typography>
                </PriceContainer>
                <Typography variant="body1" color="primary.main" textAlign="center" fontWeight="bold">
                  구독 만료일까지 이용
                </Typography>
              </PricingHeader>

              <FeaturesDescription>
                <Typography variant="h6" fontWeight="bold" textAlign="center" gutterBottom color="primary.main">
                  모든 서비스 이용 가능
                </Typography>
                <FeaturesList>
                  {allFeatures.map((feature, index) => (
                    <FeatureItem key={index}>
                      <Check sx={{ color: "#4CAF50", mr: 2, fontSize: 20 }} />
                      <Typography variant="body1" color="primary.main">
                        {feature}
                      </Typography>
                    </FeatureItem>
                  ))}
                </FeaturesList>
              </FeaturesDescription>

              <ButtonContainer>
                <CTAButton variant="contained" size="large" onClick={() => goToRoute("/auth/sign-in")}>
                  구독권 시작하기
                </CTAButton>
              </ButtonContainer>
            </CardContent>
          </PricingCard>
        </PricingGrid>

        <BenefitsSection>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom color="white">
            왜 매크로 허브를 선택해야 할까요?
          </Typography>
          <BenefitsGrid>
            <BenefitItem>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                ⚡ 즉시 시작
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3분 만에 시작 가능
              </Typography>
            </BenefitItem>
            <BenefitItem>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                🚀 빠른 성장
              </Typography>
              <Typography variant="body2" color="text.secondary">
                자동화로 3배 빠른 콘텐츠 생산
              </Typography>
            </BenefitItem>
            <BenefitItem>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                💰 비용 절약
              </Typography>
              <Typography variant="body2" color="text.secondary">
                마케팅 대행비 월 100만원 → 3만원
              </Typography>
            </BenefitItem>
          </BenefitsGrid>
        </BenefitsSection>
      </Container>
    </PricingContainer>
  );
};

export default PricingSection;

const PricingContainer = styled(Box)`
  padding: 100px 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.primary.main} 0%,
    ${({ theme }) => theme.palette.primary.dark} 100%
  );
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeaderStack = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  text-align: center;
  z-index: 1;
  position: relative;
`;

const PricingGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 1;
  position: relative;

  ${({ theme }) => theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const PricingCard = styled(Card)`
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  height: fit-content;
`;

const FreeTrialNotice = styled(Typography)`
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 16px 24px;
  border-radius: 12px;
  margin-bottom: 48px;
  text-align: center;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const PricingHeader = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  text-align: center;
  margin-bottom: 40px;
  position: relative;
`;

const PopularBadge = styled(Box)`
  position: absolute;
  top: 8px;
  right: 8px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 20px;
  ${mixinFlex("row", "center", "center")}
  gap: 4px;
  font-size: 14px;
`;

const PriceContainer = styled(Stack)`
  ${mixinFlex("row", "center", "baseline")}
  gap: 8px;
  margin: 20px 0;
`;

const FreeButton = styled(Button)`
  color: ${({ theme }) => theme.palette.primary.main};
  border-color: ${({ theme }) => theme.palette.primary.main};
  padding: 16px 32px;
  font-weight: bold;
  border-radius: 12px;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  transition: all 0.3s ease;
`;

const FeaturesDescription = styled(Box)`
  margin-bottom: 32px;
`;

const FeaturesList = styled(Stack)`
  gap: 12px;
  margin-top: 20px;
`;

const FeatureItem = styled(Stack)`
  ${mixinFlex("row", "flex-start", "center")}
`;

const ButtonContainer = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
`;

const CTAButton = styled(Button)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => theme.palette.primary.dark}
  );
  color: white;
  font-weight: bold;
  border-radius: 12px;
  padding: 16px 32px;

  font-size: 18px;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  transition: all 0.3s ease;
`;

const BenefitsSection = styled(Box)`
  margin-top: 80px;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const BenefitsGrid = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  gap: 40px;
  margin-top: 40px;

  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    gap: 30px;
  }
`;

const BenefitItem = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 20px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  flex: 1;
  max-width: 250px;

  & h6 {
    color: white;
  }

  & .MuiTypography-body2 {
    color: rgba(255, 255, 255, 0.8);
  }
`;
