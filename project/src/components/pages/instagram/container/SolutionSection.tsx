import { Box, Typography, Card, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { AutoDelete, FilterAlt, Speed, Security, Analytics } from "@mui/icons-material";

function SolutionSection() {
    return (
        <Container>
            <Title>CommentGuard가 해결해드립니다</Title>
            <Subtitle>AI 기반 자동 댓글 관리 시스템으로 깨끗한 인스타그램을 유지하세요</Subtitle>
            
            <FeatureGrid container spacing={4}>
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCard>
                        <FeatureIcon>
                            <AutoDelete sx={{ fontSize: 48, color: '#E4405F' }} />
                        </FeatureIcon>
                        <FeatureTitle>실시간 자동 삭제</FeatureTitle>
                        <FeatureText>
                            AI가 24시간 댓글을 모니터링하여<br />
                            악플과 스팸을 즉시 감지하고 자동 삭제
                        </FeatureText>
                    </FeatureCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCard>
                        <FeatureIcon>
                            <FilterAlt sx={{ fontSize: 48, color: '#666666' }} />
                        </FeatureIcon>
                        <FeatureTitle>커스텀 필터링</FeatureTitle>
                        <FeatureText>
                            나만의 키워드 설정으로<br />
                            브랜드에 맞는 맞춤형 댓글 관리
                        </FeatureText>
                    </FeatureCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCard>
                        <FeatureIcon>
                            <Speed sx={{ fontSize: 48, color: '#666666' }} />
                        </FeatureIcon>
                        <FeatureTitle>즉시 적용</FeatureTitle>
                        <FeatureText>
                            설치나 앱 다운로드 없이<br />
                            웹에서 바로 시작 가능
                        </FeatureText>
                    </FeatureCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCard>
                        <FeatureIcon>
                            <Security sx={{ fontSize: 48, color: '#666666' }} />
                        </FeatureIcon>
                        <FeatureTitle>안전한 연동</FeatureTitle>
                        <FeatureText>
                            인스타그램 공식 API 사용으로<br />
                            계정 보안 걱정 없이 이용
                        </FeatureText>
                    </FeatureCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <FeatureCard>
                        <FeatureIcon>
                            <Analytics sx={{ fontSize: 48, color: '#666666' }} />
                        </FeatureIcon>
                        <FeatureTitle>상세 리포트</FeatureTitle>
                        <FeatureText>
                            삭제된 댓글 통계와<br />
                            계정 건강도 분석 제공
                        </FeatureText>
                    </FeatureCard>
                </Grid2>
            </FeatureGrid>
            
            <ProcessSection>
                <ProcessTitle>🚀 3단계로 간단하게 시작하세요</ProcessTitle>
                <ProcessGrid container spacing={3}>
                    <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ProcessCard>
                            <ProcessNumber>1</ProcessNumber>
                            <ProcessStepTitle>계정 연결</ProcessStepTitle>
                            <ProcessStepText>
                                인스타그램 계정을<br />
                                안전하게 연결
                            </ProcessStepText>
                        </ProcessCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ProcessCard>
                            <ProcessNumber>2</ProcessNumber>
                            <ProcessStepTitle>필터 설정</ProcessStepTitle>
                            <ProcessStepText>
                                차단할 키워드와<br />
                                민감도 레벨 조정
                            </ProcessStepText>
                        </ProcessCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <ProcessCard>
                            <ProcessNumber>3</ProcessNumber>
                            <ProcessStepTitle>자동 운영</ProcessStepTitle>
                            <ProcessStepText>
                                24시간 자동으로<br />
                                깨끗한 댓글 관리
                            </ProcessStepText>
                        </ProcessCard>
                    </Grid2>
                </ProcessGrid>
            </ProcessSection>
        </Container>
    );
}

export default SolutionSection;

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

const FeatureGrid = styled(Grid2)`
    max-width: 1200px;
    margin: 0 auto 80px auto;
    justify-content: center;
    
    & .MuiGrid2-root {
        display: flex;
        justify-content: center;
    }
    
    @media (max-width: 600px) {
        justify-content: center;
        align-items: center;
        
        & .MuiGrid2-root {
            display: flex;
            justify-content: center;
            width: 100%;
        }
    }
`;

const FeatureCard = styled(Card)`
    padding: 40px 20px;
    text-align: center;
    height: 280px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: 2px solid #E4405F;
    background: #ffffff;
    box-shadow: none;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
    }
`;

const FeatureIcon = styled(Box)`
    margin-bottom: 20px;
`;

const FeatureTitle = styled(Typography)`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: #000000;
`;

const FeatureText = styled(Typography)`
    font-size: 0.875rem;
    color: #000000;
    line-height: 1.6;
`;

const ProcessSection = styled(Box)`
    max-width: 1000px;
    margin: 0 auto;
`;

const ProcessTitle = styled(Typography)`
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    color: #333;
    
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const ProcessGrid = styled(Grid2)`
    max-width: 900px;
    margin: 0 auto;
    justify-content: center;
    
    & .MuiGrid2-root {
        display: flex;
        justify-content: center;
    }
    
    @media (max-width: 600px) {
        justify-content: center;
        align-items: center;
        
        & .MuiGrid2-root {
            display: flex;
            justify-content: center;
            width: 100%;
        }
    }
`;

const ProcessCard = styled(Card)`
    padding: 32px 24px;
    text-align: center;
    height: 220px;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    border: 2px solid #E4405F;
    background: #ffffff;
    box-shadow: none;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
    }
`;

const ProcessNumber = styled(Box)`
    width: 60px;
    height: 60px;
    min-height: 60px;
    border-radius: 50%;
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto 20px auto;
`;

const ProcessStepTitle = styled(Typography)`
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #000000;
`;

const ProcessStepText = styled(Typography)`
    font-size: 0.875rem;
    color: #000000;
    line-height: 1.6;
`; 