import { Box, Typography, Card, Button, Chip, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Check, Star, Diamond } from "@mui/icons-material";

function PricingSection() {
  return (
    <Container>
      <Title>간편한 요금제로 시작하세요</Title>
      <Subtitle>7일 무료 체험 후 월 3만원으로 모든 기능을 이용하세요</Subtitle>

      <PricingGrid container spacing={4}>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
          <PricingCard>
            <PlanHeader>
              <PlanIcon>
                <Star sx={{ fontSize: 40, color: "#FFD700" }} />
              </PlanIcon>
              <PlanName>무료 체험</PlanName>
              <PlanPrice>
                <PriceNumber>0원</PriceNumber>
                <PricePeriod>/7일</PricePeriod>
              </PlanPrice>
            </PlanHeader>

            <FeatureList>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>AI 악플 자동 감지</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>자동 댓글 삭제</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>실시간 모니터링</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>기본 필터 설정</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>일일 리포트</FeatureText>
              </Feature>
            </FeatureList>

            <PricingButton
              variant="outlined"
              onClick={() => {
                window.open("https://naver.me/xum7Y6dN", "_blank");
              }}
            >
              무료로 시작하기
            </PricingButton>
          </PricingCard>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center" }}>
          <PopularPricingCard>
            <PopularBadge>
              <Chip
                label="추천"
                size="small"
                sx={{
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                  fontWeight: 600,
                }}
              />
            </PopularBadge>
            <PlanHeader>
              <PlanIcon>
                <Diamond sx={{ fontSize: 40, color: "#E4405F" }} />
              </PlanIcon>
              <PlanName>정기 구독</PlanName>
              <PlanPrice>
                <PriceNumber>30,000원</PriceNumber>
                <PricePeriod>/월</PricePeriod>
              </PlanPrice>
            </PlanHeader>

            <FeatureList>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>고급 AI 악플 감지</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>무제한 계정 연결</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>커스텀 키워드 필터</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>실시간 대시보드</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>주간/월간 상세 리포트</FeatureText>
              </Feature>
              <Feature>
                <Check sx={{ fontSize: 16, color: "#4CAF50" }} />
                <FeatureText>우선 고객 지원</FeatureText>
              </Feature>
            </FeatureList>

            <PopularPricingButton
              variant="contained"
              onClick={() => {
                window.open("https://naver.me/xum7Y6dN", "_blank");
              }}
            >
              구독 시작하기
            </PopularPricingButton>
          </PopularPricingCard>
        </Grid2>
      </PricingGrid>

      <GuaranteeSection>
        <GuaranteeTitle>💝 안심하고 시작하세요</GuaranteeTitle>
        <GuaranteeText>
          • 7일 무료 체험 기간 중 언제든 해지 가능
          <br />
          • 30일 환불 보장 정책
          <br />• 언제든 요금제 변경 가능
        </GuaranteeText>
      </GuaranteeSection>
    </Container>
  );
}

export default PricingSection;

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

const PricingGrid = styled(Grid2)`
  max-width: 800px;
  margin: 0 auto 60px auto;
  justify-content: center;

  & .MuiGrid2-root {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;

    & .MuiGrid2-root {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;

const PricingCard = styled(Card)`
  padding: 32px 24px 24px 24px;
  height: 520px;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid #e4405f;
  background: #ffffff;
  box-shadow: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
  }
`;

const PopularPricingCard = styled(Card)`
  padding: 32px 24px 24px 24px;
  height: 520px;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid #e4405f;
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
  box-shadow: none;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
  }
`;

const PopularBadge = styled(Box)`
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
`;

const PlanHeader = styled(Box)`
  margin-bottom: 32px;
`;

const PlanIcon = styled(Box)`
  margin-bottom: 16px;
`;

const PlanName = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #000000;
`;

const PlanPrice = styled(Box)`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
`;

const PriceNumber = styled(Typography)`
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
`;

const PricePeriod = styled(Typography)`
  font-size: 1rem;
  color: #666;
`;

const FeatureList = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 32px;
`;

const Feature = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-align: left;
`;

const FeatureText = styled(Typography)`
  font-size: 0.875rem;
  color: #000000;
`;

const PricingButton = styled(Button)`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
`;

const PopularPricingButton = styled(Button)`
  padding: 14px 32px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  box-shadow: 0 4px 20px rgba(228, 64, 95, 0.3);

  &:hover {
    background: linear-gradient(45deg, #e08429 0%, #d55832 25%, #cb1e39 50%, #bb155c 75%, #ab077e 100%);
    box-shadow: 0 6px 24px rgba(228, 64, 95, 0.4);
  }
`;

const GuaranteeSection = styled(Box)`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 16px;
`;

const GuaranteeTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1.25rem;
  }
`;

const GuaranteeText = styled(Typography)`
  font-size: 0.875rem;
  color: #666;
  line-height: 1.8;
`;
