import { useLoadingRouter } from "@/hooks/useLoadingRouter";
import { mixinFlex } from "@/styles/mixins";
import { 
  Box, 
  Card, 
  CardContent, 
  Container, 
  Grid, 
  Stack, 
  styled, 
  Typography,
  Button
} from "@mui/material";
import { AutoAwesome, Camera, TrendingUp } from "@mui/icons-material";

const ServicesSection = () => {
  const { navigateWithLoading } = useLoadingRouter();

  const services = [
    {
      title: "오토프레스",
      subtitle: "블로그 자동화 플랫폼",
      description: "AI가 자동으로 블로그 포스트를 생성하고 워드프레스에 발행합니다. 키워드만 입력하면 SEO 최적화된 글이 자동으로 완성됩니다.",
      icon: <AutoAwesome sx={{ fontSize: 48 }} />,
      features: [
        "AI 기반 자동 글 작성",
        "워드프레스 자동 발행", 
        "SEO 최적화",
        "키워드 기반 포스팅"
      ],
      link: "/autopress",
      color: "#4CAF50"
    },
    {
      title: "인스타그램",
      subtitle: "SNS 마케팅 자동화",
      description: "인스타그램 계정을 효율적으로 관리하고 자동화된 마케팅 전략으로 팔로워와 매출을 증가시킵니다.",
      icon: <Camera sx={{ fontSize: 48 }} />,
      features: [
        "자동 팔로우/언팔로우",
        "스마트 댓글 관리",
        "타겟 분석",
        "성과 리포트"
      ],
      link: "/instagram",
      color: "#E91E63"
    }
  ];

  return (
    <ServicesContainer>
      <Container maxWidth="lg">
        <HeaderStack>
          <Typography 
            variant="h2" 
            textAlign="center"
            sx={{ 
              fontWeight: "bold",
              mb: 2,
              color: "text.primary"
            }}
          >
            강력한 매크로 서비스
          </Typography>
          <Typography 
            variant="h6" 
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: "600px" }}
          >
            1인 창업가들이 꼭 필요한 마케팅 업무를 자동화하여
            <br />
            더 중요한 비즈니스에 집중할 수 있도록 도와드립니다.
          </Typography>
        </HeaderStack>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <ServiceCard elevation={3}>
                <CardContent sx={{ p: 4 }}>
                  <ServiceHeader>
                    <IconContainer style={{ backgroundColor: service.color }}>
                      {service.icon}
                    </IconContainer>
                    <div>
                      <Typography variant="h4" fontWeight="bold" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" gutterBottom>
                        {service.subtitle}
                      </Typography>
                    </div>
                  </ServiceHeader>

                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.7 }}
                  >
                    {service.description}
                  </Typography>

                  <FeaturesList>
                    {service.features.map((feature, idx) => (
                      <FeatureItem key={idx}>
                        <TrendingUp sx={{ color: service.color, mr: 1, fontSize: 20 }} />
                        <Typography variant="body2">{feature}</Typography>
                      </FeatureItem>
                    ))}
                  </FeaturesList>

                  <ServiceButton 
                    variant="contained"
                    onClick={() => navigateWithLoading(service.link)}
                    style={{ backgroundColor: service.color }}
                  >
                    {service.title} 시작하기
                  </ServiceButton>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <StatsSection>
          <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
            이미 많은 창업가들이 사용하고 있습니다
          </Typography>
          <StatsGrid>
            <StatItem>
              <Typography variant="h3" fontWeight="bold" color="text.primary">
                1,200+  
              </Typography>
              <Typography variant="body2" color="text.primary">
                활성 사용자
              </Typography>
            </StatItem>
            <StatItem>
              <Typography variant="h3" fontWeight="bold" color="text.primary">
                50,000+
              </Typography>
              <Typography variant="body2" color="text.primary">
                자동 포스팅
              </Typography>
            </StatItem>
            <StatItem>
              <Typography variant="h3" fontWeight="bold" color="text.primary">
                300%
              </Typography>
              <Typography variant="body2" color="text.primary">
                평균 생산성 향상
              </Typography>
            </StatItem>
          </StatsGrid>
        </StatsSection>
      </Container>
    </ServicesContainer>
  );
};

export default ServicesSection;

const ServicesContainer = styled(Box)`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const HeaderStack = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  text-align: center;
`;

const ServiceCard = styled(Card)`
  height: 100%;
  transition: all 0.3s ease;
  border-radius: 16px;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  }
`;

const ServiceHeader = styled(Stack)`
  ${mixinFlex("row", "flex-start", "center")}
  gap: 20px;
  margin-bottom: 24px;
`;

const IconContainer = styled(Box)`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  ${mixinFlex("column", "center", "center")}
  color: white;
  flex-shrink: 0;
`;

const FeaturesList = styled(Stack)`
  gap: 12px;
  margin-bottom: 32px;
`;

const FeatureItem = styled(Stack)`
  ${mixinFlex("row", "flex-start", "center")}
`;

const ServiceButton = styled(Button)`
  width: 100%;
  padding: 16px;
  font-weight: bold;
  border-radius: 12px;
  font-size: 16px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  }
  
  transition: all 0.3s ease;
`;

const StatsSection = styled(Box)`
  margin-top: 80px;
  padding: 60px 0;
  background: linear-gradient(135deg, 
    ${({ theme }) => theme.palette.primary.light} 0%, 
    ${({ theme }) => theme.palette.primary.main} 100%
  );
  border-radius: 24px;
  color: white;
`;

const StatsGrid = styled(Grid)`
  ${mixinFlex("row", "center", "center")}
  gap: 60px;
  margin-top: 40px;
  
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
    gap: 40px;
  }

`;

const StatItem = styled(Stack)`
  ${mixinFlex("column", "center", "center")}
  text-align: center;
  color : ${({ theme }) => theme.palette.text.white};

`; 