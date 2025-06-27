import { Box, Typography, Card, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Star, Store, Business, Campaign, Person, TrendingUp } from "@mui/icons-material";

function TargetSection() {
    return (
        <Container>
            <Title>이런 분들에게 추천해요!</Title>
            <Subtitle>CommentGuard로 브랜드 이미지를 보호하고 성장에 집중하세요</Subtitle>
            
            <TargetGrid container spacing={3}>
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TargetCard>
                        <TargetIcon>
                            <Star sx={{ fontSize: 48, color: '#E4405F' }} />
                        </TargetIcon>
                        <TargetTitle>인플루언서</TargetTitle>
                        <TargetDescription>
                            팔로워와의 소통에 집중하고<br />
                            악플 스트레스에서 벗어나세요
                        </TargetDescription>
                        <TargetFeatures>
                            <FeatureItem>• 개인 브랜드 보호</FeatureItem>
                            <FeatureItem>• 정신 건강 관리</FeatureItem>
                            <FeatureItem>• 콘텐츠 제작에 집중</FeatureItem>
                        </TargetFeatures>
                    </TargetCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TargetCard>
                        <TargetIcon>
                            <Store sx={{ fontSize: 48, color: '#666666' }} />
                        </TargetIcon>
                        <TargetTitle>쇼핑몰 운영자</TargetTitle>
                        <TargetDescription>
                            상품 홍보 게시물을<br />
                            깨끗하게 관리하세요
                        </TargetDescription>
                        <TargetFeatures>
                            <FeatureItem>• 브랜드 신뢰도 향상</FeatureItem>
                            <FeatureItem>• 경쟁사 악성 댓글 차단</FeatureItem>
                            <FeatureItem>• 매출 증대 효과</FeatureItem>
                        </TargetFeatures>
                    </TargetCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TargetCard>
                        <TargetIcon>
                            <Business sx={{ fontSize: 48, color: '#666666' }} />
                        </TargetIcon>
                        <TargetTitle>브랜드 공식 계정</TargetTitle>
                        <TargetDescription>
                            기업 이미지를 보호하고<br />
                            고객과 건전한 소통을 유지하세요
                        </TargetDescription>
                        <TargetFeatures>
                            <FeatureItem>• 기업 이미지 관리</FeatureItem>
                            <FeatureItem>• 위기 상황 예방</FeatureItem>
                            <FeatureItem>• 고객 만족도 향상</FeatureItem>
                        </TargetFeatures>
                    </TargetCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TargetCard>
                        <TargetIcon>
                            <Campaign sx={{ fontSize: 48, color: '#666666' }} />
                        </TargetIcon>
                        <TargetTitle>마케터</TargetTitle>
                        <TargetDescription>
                            캠페인 효과를 극대화하고<br />
                            부정적 반응을 최소화하세요
                        </TargetDescription>
                        <TargetFeatures>
                            <FeatureItem>• 캠페인 성과 향상</FeatureItem>
                            <FeatureItem>• ROI 개선</FeatureItem>
                            <FeatureItem>• 브랜드 안전성 확보</FeatureItem>
                        </TargetFeatures>
                    </TargetCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TargetCard>
                        <TargetIcon>
                            <Person sx={{ fontSize: 48, color: '#666666' }} />
                        </TargetIcon>
                        <TargetTitle>셀럽/연예인</TargetTitle>
                        <TargetDescription>
                            팬들과의 소통을 방해하는<br />
                            악성 댓글을 자동으로 차단하세요
                        </TargetDescription>
                        <TargetFeatures>
                            <FeatureItem>• 팬덤 관리</FeatureItem>
                            <FeatureItem>• 정신적 스트레스 감소</FeatureItem>
                            <FeatureItem>• 긍정적 소통 환경 조성</FeatureItem>
                        </TargetFeatures>
                    </TargetCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 6, lg: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TargetCard>
                        <TargetIcon>
                            <TrendingUp sx={{ fontSize: 48, color: '#666666' }} />
                        </TargetIcon>
                        <TargetTitle>크리에이터</TargetTitle>
                        <TargetDescription>
                            창작 활동에 집중하고<br />
                            건전한 커뮤니티를 만들어가세요
                        </TargetDescription>
                        <TargetFeatures>
                            <FeatureItem>• 창작 환경 개선</FeatureItem>
                            <FeatureItem>• 구독자 만족도 향상</FeatureItem>
                            <FeatureItem>• 장기적 성장 기반 마련</FeatureItem>
                        </TargetFeatures>
                    </TargetCard>
                </Grid2>
            </TargetGrid>
            
            <StatsSection>
                <StatsTitle>✨ 이미 많은 분들이 경험하고 있어요</StatsTitle>
                <StatsGrid container spacing={4}>
                    <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <StatCard>
                            <StatNumber>98%</StatNumber>
                            <StatLabel>악플 차단 정확도</StatLabel>
                        </StatCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <StatCard>
                            <StatNumber>24시간</StatNumber>
                            <StatLabel>실시간 모니터링</StatLabel>
                        </StatCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <StatCard>
                            <StatNumber>5,000+</StatNumber>
                            <StatLabel>만족한 사용자</StatLabel>
                        </StatCard>
                    </Grid2>
                </StatsGrid>
            </StatsSection>
        </Container>
    );
}

export default TargetSection;

const Container = styled(Box)`
    padding: 100px 20px;
    background: #f8f9fa;
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

const TargetGrid = styled(Grid2)`
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

const TargetCard = styled(Card)`
    padding: 32px 24px;
    text-align: center;
    height: 360px;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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

const TargetIcon = styled(Box)`
    margin-bottom: 20px;
`;

const TargetTitle = styled(Typography)`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: #000000;
`;

const TargetDescription = styled(Typography)`
    font-size: 0.875rem;
    color: #000000;
    margin-bottom: 20px;
    line-height: 1.6;
`;

const TargetFeatures = styled(Box)`
    text-align: left;
    width: 100%;
`;

const FeatureItem = styled(Typography)`
    font-size: 0.75rem;
    color: #000000;
    margin-bottom: 6px;
    line-height: 1.4;
`;

const StatsSection = styled(Box)`
    max-width: 800px;
    margin: 0 auto;
`;

const StatsTitle = styled(Typography)`
    font-size: 1.75rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    color: #333;
    
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const StatsGrid = styled(Grid2)`
    max-width: 800px;
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

const StatCard = styled(Card)`
    padding: 24px;
    text-align: center;
    height: 120px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 2px solid #E4405F;
    background: #ffffff;
    box-shadow: none;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
    }
`;

const StatNumber = styled(Typography)`
    font-size: 2.5rem;
    font-weight: 700;
    color: #E4405F;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

const StatLabel = styled(Typography)`
    font-size: 0.875rem;
    color: #666;
    font-weight: 500;
`; 