import { Box, Typography, Button, styled } from "@mui/material";
import { Shield } from "@mui/icons-material";

function HeroSection() {
    return (
        <Container>
            <LogoContainer>
                <Shield sx={{ fontSize: 48, color: '#E4405F' }} />
                <ServiceName>CommentGuard</ServiceName>
            </LogoContainer>
            
            <Slogan>
                인스타그램 악플<br/> 이제 자동으로 차단하세요
            </Slogan>
            
            <SubText>
                AI 기반 실시간 댓글 모니터링으로<br />
                당신의 계정을 깨끗하게 지켜드립니다
            </SubText>
            
            <CTAButton variant="contained" size="large" onClick={() => {
                window.open('https://naver.me/xum7Y6dN', '_blank');
            }}>
                지금 무료 체험하기
            </CTAButton>
            
            <FeatureText>
                ✅ 설치 불필요 • ✅ 24시간 자동 운영 • ✅ 무료 체험 7일
            </FeatureText>
        </Container>
    );
}

export default HeroSection;

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #000000 0%, #333333 100%);
    color: white;
    min-height: 100vh;
    justify-content: center;
    padding: 80px 20px;
`;

const LogoContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 32px;
`;

const ServiceName = styled(Typography)`
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: -1px;
    
    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

const Slogan = styled(Typography)`
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 16px;
    line-height: 1.2;
    
    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

const SubText = styled(Typography)`
    font-size: 1.25rem;
    margin-bottom: 40px;
    opacity: 0.9;
    line-height: 1.6;
    
    @media (max-width: 600px) {
        font-size: 1rem;
    }
`;

const CTAButton = styled(Button)`
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    padding: 16px 48px;
    font-size: 1.125rem;
    font-weight: 700;
    border-radius: 50px;
    margin-bottom: 24px;
    box-shadow: 0 8px 32px rgba(228, 64, 95, 0.3);
    
    &:hover {
        background: linear-gradient(45deg, #e08429 0%, #d55832 25%, #cb1e39 50%, #bb155c 75%, #ab077e 100%);
        transform: translateY(-2px);
        box-shadow: 0 12px 40px rgba(228, 64, 95, 0.4);
    }
    
    @media (max-width: 600px) {
        padding: 14px 32px;
        font-size: 1rem;
    }
`;

const FeatureText = styled(Typography)`
    font-size: 0.875rem;
    opacity: 0.8;
    font-weight: 500;
    
    @media (max-width: 600px) {
        font-size: 0.75rem;
    }
`; 