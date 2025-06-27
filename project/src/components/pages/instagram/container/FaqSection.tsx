import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, styled } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

function FaqSection() {
  const faqData = [
    {
      question: "CommentGuard는 어떻게 악플을 감지하나요?",
      answer:
        "고도화된 AI 자연어 처리 기술을 통해 욕설, 혐오 표현, 스팸, 광고성 댓글 등을 실시간으로 분석하고 감지합니다. 지속적인 학습을 통해 감지 정확도를 높여가고 있습니다.",
    },
    {
      question: "인스타그램 계정 연결이 안전한가요?",
      answer:
        "네, 완전히 안전합니다. CommentGuard는 인스타그램 공식 API만을 사용하며, 계정 정보는 암호화되어 보관됩니다. 언제든지 연결을 해제할 수 있으며, 비밀번호는 저장하지 않습니다.",
    },
    {
      question: "실수로 좋은 댓글이 삭제될 수도 있나요?",
      answer:
        "AI의 정확도는 98% 이상이지만, 만약의 경우를 대비해 삭제된 댓글 복구 기능과 화이트리스트 설정 기능을 제공합니다. 특정 사용자나 키워드는 삭제 대상에서 제외할 수 있습니다.",
    },
    {
      question: "설치나 앱 다운로드가 필요한가요?",
      answer:
        "아니요, 별도의 설치나 앱 다운로드는 필요하지 않습니다. 웹 브라우저에서 바로 사용할 수 있으며, 계정 연결 후 즉시 서비스를 이용하실 수 있습니다.",
    },
    {
      question: "요금제는 언제든지 변경할 수 있나요?",
      answer:
        "네, 언제든지 요금제를 업그레이드하거나 다운그레이드할 수 있습니다. 변경사항은 다음 결제일부터 적용되며, 환불 정책에 따라 남은 기간에 대한 환불도 가능합니다.",
    },
    {
      question: "여러 개의 인스타그램 계정을 관리할 수 있나요?",
      answer:
        "베이직 요금제는 최대 3개 계정, 프리미엄 요금제는 무제한 계정 연결이 가능합니다. 각 계정별로 다른 필터 설정을 적용할 수 있어 맞춤형 관리가 가능합니다.",
    },
    {
      question: "해지는 어떻게 하나요?",
      answer:
        "언제든지 설정에서 구독을 해지할 수 있습니다. 해지 후에도 현재 결제 기간이 끝날 때까지는 서비스를 계속 이용하실 수 있으며, 자동 갱신되지 않습니다.",
    },
    {
      question: "고객 지원은 어떻게 받을 수 있나요?",
      answer:
        "이메일, 라이브 채팅, 고객센터를 통해 지원을 받으실 수 있습니다. 프리미엄 사용자는 우선 지원을 받으며, 평균 1시간 이내에 답변을 받으실 수 있습니다.",
    },
  ];

  return (
    <Container>
      <Title>자주 묻는 질문</Title>
      <Subtitle>CommentGuard에 대해 궁금한 점들을 확인해보세요</Subtitle>

      <FaqContainer>
        {faqData.map((faq, index) => (
          <StyledAccordion key={index}>
            <StyledAccordionSummary expandIcon={<ExpandMore />}>
              <QuestionText>{faq.question}</QuestionText>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <AnswerText>{faq.answer}</AnswerText>
            </StyledAccordionDetails>
          </StyledAccordion>
        ))}
      </FaqContainer>

      <ContactSection>
        <ContactTitle>💬 더 궁금한 점이 있으신가요?</ContactTitle>
        <ContactText>언제든지 문의해주세요. 전문 상담원이 빠르게 도움을 드리겠습니다.</ContactText>
        <ContactInfo>
          <ContactItem>📧 m3088787@gmail.com</ContactItem>
          <ContactItem>📞 고객센터: 010-2041-5761</ContactItem>
        </ContactInfo>
      </ContactSection>
    </Container>
  );
}

export default FaqSection;

const Container = styled(Box)`
  padding: 100px 20px;
  background: white;
`;

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1.875rem;
  }
`;

const Subtitle = styled(Typography)`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 60px;
  color: #666;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 40px;
  }
`;

const FaqContainer = styled(Box)`
  max-width: 800px;
  margin: 0 auto 80px auto;
`;

const StyledAccordion = styled(Accordion)`
  margin-bottom: 16px;
  border-radius: 12px !important;
  border: 2px solid #e4405f !important;
  background: #ffffff !important;
  box-shadow: none !important;

  &:before {
    display: none;
  }

  &.Mui-expanded {
    margin-bottom: 16px;
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  padding: 20px 24px;

  .MuiAccordionSummary-content {
    margin: 0;
  }

  &.Mui-expanded {
    min-height: auto;
  }
`;

const QuestionText = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
  color: #000000;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  padding: 0 24px 20px 24px;
  padding-top: 0;
`;

const AnswerText = styled(Typography)`
  font-size: 0.875rem;
  color: #000000;
  line-height: 1.6;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const ContactSection = styled(Box)`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 16px;
`;

const ContactTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const ContactText = styled(Typography)`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const ContactInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }
`;

const ContactItem = styled(Typography)`
  font-size: 0.75rem;
  color: #555;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`;
