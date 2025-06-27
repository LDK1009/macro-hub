import { useLoadingRouter } from "@/hooks/useLoadingRouter";
import { mixinFlex } from "@/styles/mixins";
import { Box, Button, Container, Stack, styled, Typography } from "@mui/material";

const HeroSection = () => {
  const { navigateWithLoading } = useLoadingRouter();

  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <ContentStack>
          <Typography
            variant="h1"
            color="white"
            textAlign="center"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: "bold",
              mb: 2,
            }}
          >
            1인 창업가를 위한
            <br />
            매크로 플랫폼
          </Typography>
          <Typography
            variant="h5"
            color="white"
            textAlign="center"
            sx={{
              opacity: 0.9,
              mb: 4,
              maxWidth: "600px",
            }}
          >
            오토프레스로 블로그 포스팅을 자동화하고
            <br />
            인스타그램 마케팅을 효율적으로 관리하세요
          </Typography>
          <ButtonGroup>
            <CTAButton variant="contained" size="large" onClick={() => navigateWithLoading("/auth/sign-in")}>
              시작하기
            </CTAButton>
            <SecondaryButton variant="outlined" size="large" onClick={() => navigateWithLoading("/auth/sign-in")}>
              서비스 둘러보기
            </SecondaryButton>
          </ButtonGroup>
          <FreeTrialText variant="body2">🎉 7일 무료 체험 • 신용카드 없이 시작</FreeTrialText>
        </ContentStack>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled(Box)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.primary.main} 0%,
    ${({ theme }) => theme.palette.primary.dark} 100%
  );
  min-height: 100vh;
  ${mixinFlex("column", "center", "center")}
  position: relative;
  overflow: hidden;
  padding-top: 64px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const ContentStack = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  z-index: 1;
  text-align: center;
`;

const ButtonGroup = styled(Stack)`
  ${mixinFlex("row", "center", "center")}
  gap: 16px;
  margin-bottom: 24px;

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    width: 100%;

    & > button {
      width: 100%;
      max-width: 300px;
    }
  }
`;

const CTAButton = styled(Button)`
  background-color: white;
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 16px 32px;
  font-weight: bold;
  border-radius: 12px;
  min-width: 200px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }

  transition: all 0.3s ease;
`;

const SecondaryButton = styled(Button)`
  color: white;
  border-color: white;
  padding: 16px 32px;
  font-weight: bold;
  border-radius: 12px;
  min-width: 200px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-2px);
  }

  transition: all 0.3s ease;
`;

const FreeTrialText = styled(Typography)`
  color: white;
  opacity: 0.9;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 24px;
  border-radius: 24px;
  font-weight: 500;
`;
