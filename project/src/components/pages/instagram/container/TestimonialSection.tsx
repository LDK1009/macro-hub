import { Box, Typography, Card, Avatar, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Star, FormatQuote } from "@mui/icons-material";

function TestimonialSection() {
    return (
        <Container>
            <Title>실제 사용자들의 후기</Title>
            <Subtitle>CommentGuard를 사용하고 있는 분들의 생생한 경험담을 들어보세요</Subtitle>
            
            <TestimonialGrid container spacing={4}>
                <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TestimonialCard>
                        <QuoteIcon>
                            <FormatQuote sx={{ fontSize: 32, color: '#E4405F', opacity: 0.3 }} />
                        </QuoteIcon>
                        
                        <TestimonialText>
                            매일 수십 개씩 달리던 악플 때문에 스트레스가 심했는데, CommentGuard 덕분에 이제 콘텐츠 제작에만 집중할 수 있어요. 진짜 신세계입니다!
                        </TestimonialText>
                        
                        <RatingSection>
                            <Stars>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} sx={{ fontSize: 16, color: '#FFD700' }} />
                                ))}
                            </Stars>
                        </RatingSection>
                        
                        <UserInfo>
                            <UserAvatar>
                                <Avatar sx={{ width: 48, height: 48, bgcolor: '#E4405F' }}>
                                    김
                                </Avatar>
                            </UserAvatar>
                            <UserDetails>
                                <UserName>김민지</UserName>
                                <UserRole>뷰티 인플루언서 • 팔로워 15만</UserRole>
                            </UserDetails>
                        </UserInfo>
                    </TestimonialCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TestimonialCard>
                        <QuoteIcon>
                            <FormatQuote sx={{ fontSize: 32, color: '#E4405F', opacity: 0.3 }} />
                        </QuoteIcon>
                        
                        <TestimonialText>
                            쇼핑몰 계정에 경쟁업체에서 올리는 악성 댓글들이 정말 골치였는데, 자동으로 걸러져서 브랜드 이미지가 확실히 좋아졌어요. 매출도 늘었고요!
                        </TestimonialText>
                        
                        <RatingSection>
                            <Stars>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} sx={{ fontSize: 16, color: '#FFD700' }} />
                                ))}
                            </Stars>
                        </RatingSection>
                        
                        <UserInfo>
                            <UserAvatar>
                                <Avatar sx={{ width: 48, height: 48, bgcolor: '#666666' }}>
                                    박
                                </Avatar>
                            </UserAvatar>
                            <UserDetails>
                                <UserName>박서준</UserName>
                                <UserRole>온라인 쇼핑몰 대표</UserRole>
                            </UserDetails>
                        </UserInfo>
                    </TestimonialCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <TestimonialCard>
                        <QuoteIcon>
                            <FormatQuote sx={{ fontSize: 32, color: '#E4405F', opacity: 0.3 }} />
                        </QuoteIcon>
                        
                        <TestimonialText>
                            브랜드 공식 계정 관리가 정말 힘들었는데, CommentGuard가 24시간 자동으로 관리해주니까 업무 효율이 엄청 올라갔어요. 고객들도 깨끗한 환경을 좋아해요.
                        </TestimonialText>
                        
                        <RatingSection>
                            <Stars>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} sx={{ fontSize: 16, color: '#FFD700' }} />
                                ))}
                            </Stars>
                        </RatingSection>
                        
                        <UserInfo>
                            <UserAvatar>
                                <Avatar sx={{ width: 48, height: 48, bgcolor: '#666666' }}>
                                    이
                                </Avatar>
                            </UserAvatar>
                            <UserDetails>
                                <UserName>이소영</UserName>
                                <UserRole>패션브랜드 마케팅팀</UserRole>
                            </UserDetails>
                        </UserInfo>
                    </TestimonialCard>
                </Grid2>
            </TestimonialGrid>
            
            <StatsContainer>
                <StatsTitle>📈 CommentGuard 성과 지표</StatsTitle>
                <StatsGrid container spacing={4}>
                    <Grid2 size={{ xs: 6, md: 3 }}>
                        <StatItem>
                            <StatNumber>99.2%</StatNumber>
                            <StatLabel>사용자 만족도</StatLabel>
                        </StatItem>
                    </Grid2>
                    <Grid2 size={{ xs: 6, md: 3 }}>
                        <StatItem>
                            <StatNumber>85%</StatNumber>
                            <StatLabel>스트레스 감소</StatLabel>
                        </StatItem>
                    </Grid2>
                    <Grid2 size={{ xs: 6, md: 3 }}>
                        <StatItem>
                            <StatNumber>70%</StatNumber>
                            <StatLabel>댓글 관리 시간 절약</StatLabel>
                        </StatItem>
                    </Grid2>
                    <Grid2 size={{ xs: 6, md: 3 }}>
                        <StatItem>
                            <StatNumber>95%</StatNumber>
                            <StatLabel>재구매율</StatLabel>
                        </StatItem>
                    </Grid2>
                </StatsGrid>
            </StatsContainer>
        </Container>
    );
}

export default TestimonialSection;

const Container = styled(Box)`
    padding: 100px 20px;
    background: #ffffff;
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

const TestimonialGrid = styled(Grid2)`
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

const TestimonialCard = styled(Card)`
    padding: 32px;
    height: 320px;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 2px solid #E4405F;
    background: #ffffff;
    box-shadow: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
    }
`;

const QuoteIcon = styled(Box)`
    position: absolute;
    top: 16px;
    right: 16px;
`;

const TestimonialText = styled(Typography)`
    font-size: 0.875rem;
    color: #000000;
    line-height: 1.6;
    margin-bottom: 20px;
    flex: 1;
`;

const RatingSection = styled(Box)`
    margin-bottom: 20px;
`;

const Stars = styled(Box)`
    display: flex;
    gap: 2px;
`;

const UserInfo = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const UserAvatar = styled(Box)`
    
`;

const UserDetails = styled(Box)`
    
`;

const UserName = styled(Typography)`
    font-size: 0.875rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 4px;
`;

const UserRole = styled(Typography)`
    font-size: 0.75rem;
    color: #666;
`;

const StatsContainer = styled(Box)`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const StatsTitle = styled(Typography)`
    font-size: 1.75rem;
    font-weight: 600;
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

const StatItem = styled(Box)`
    padding: 20px;
`;

const StatNumber = styled(Typography)`
    font-size: 2rem;
    font-weight: 700;
    color: #E4405F;
    margin-bottom: 8px;
    
    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const StatLabel = styled(Typography)`
    font-size: 0.75rem;
    color: #666;
    font-weight: 500;
    
    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
`; 