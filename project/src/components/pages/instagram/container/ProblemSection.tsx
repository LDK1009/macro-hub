import { Box, Typography, Card, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Warning, TrendingDown, Psychology } from "@mui/icons-material";

function ProblemSection() {
    return (
        <Container>
            <Title>당신의 인스타그램은 지금 안전한가요?</Title>
            
            <ProblemGrid container spacing={3}>
                <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProblemCard>
                        <IconWrapper>
                            <Warning sx={{ fontSize: 40, color: '#E4405F' }} />
                        </IconWrapper>
                        <ProblemTitle>매일 쏟아지는 악플</ProblemTitle>
                        <ProblemText>
                            &quot;못생겼네&quot;, &quot;광고 그만해&quot;, &quot;언팔&quot;<br />
                            하루에도 수십 개씩 달리는 부정적 댓글들
                        </ProblemText>
                    </ProblemCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProblemCard>
                        <IconWrapper>
                            <Psychology sx={{ fontSize: 40, color: '#E4405F' }} />
                        </IconWrapper>
                        <ProblemTitle>정신적 스트레스</ProblemTitle>
                        <ProblemText>
                            악플로 인한 우울감, 자신감 하락<br />
                            활동 중단을 고민하게 되는 순간들
                        </ProblemText>
                    </ProblemCard>
                </Grid2>
                
                <Grid2 size={{ xs: 12, sm: 10, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ProblemCard>
                        <IconWrapper>
                            <TrendingDown sx={{ fontSize: 40, color: '#E4405F' }} />
                        </IconWrapper>
                        <ProblemTitle>브랜드 이미지 손상</ProblemTitle>
                        <ProblemText>
                            악플이 노출되어 발생하는<br />
                            브랜드 신뢰도 하락과 매출 감소
                        </ProblemText>
                    </ProblemCard>
                </Grid2>
            </ProblemGrid>
            
            <ExampleSection>
                <ExampleTitle>😰 이런 댓글들 때문에 고민이신가요?</ExampleTitle>
                <ExampleGrid container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <ExampleCard>
                            <BadCommentText>&quot;이게 뭐냐 ㅋㅋ 돈 아까워&quot;</BadCommentText>
                            <CommentType>악의적 비판</CommentType>
                        </ExampleCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <ExampleCard>
                            <BadCommentText>&quot;다이어트 보조제 팝니다 DM주세요&quot;</BadCommentText>
                            <CommentType>스팸/광고</CommentType>
                        </ExampleCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <ExampleCard>
                            <BadCommentText>&quot;너무 못생겼는데... 성형하세요&quot;</BadCommentText>
                            <CommentType>외모 비하</CommentType>
                        </ExampleCard>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 6 }}>
                        <ExampleCard>
                            <BadCommentText>&quot;XX새끼 언팔함 ㅂㅇ&quot;</BadCommentText>
                            <CommentType>욕설/비속어</CommentType>
                        </ExampleCard>
                    </Grid2>
                </ExampleGrid>
            </ExampleSection>
        </Container>
    );
}

export default ProblemSection;

const Container = styled(Box)`
    padding: 100px 20px;
    background: #ffffff;
`;

const Title = styled(Typography)`
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 60px;
    color: #333;
    
    @media (max-width: 600px) {
        font-size: 1.875rem;
        margin-bottom: 40px;
    }
`;

const ProblemGrid = styled(Grid2)`
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

const ProblemCard = styled(Card)`
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
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(228, 64, 95, 0.15);
    }
`;

const IconWrapper = styled(Box)`
    margin-bottom: 20px;
`;

const ProblemTitle = styled(Typography)`
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: #000000;
`;

const ProblemText = styled(Typography)`
    font-size: 0.875rem;
    color: #000000;
    line-height: 1.6;
`;

const ExampleSection = styled(Box)`
    max-width: 800px;
    margin: 0 auto;
`;

const ExampleTitle = styled(Typography)`
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 32px;
    color: #333;
    
    @media (max-width: 600px) {
        font-size: 1.25rem;
    }
`;

const ExampleGrid = styled(Grid2)`
    
`;

const ExampleCard = styled(Box)`
    background: white;
    padding: 20px;
    border-radius: 12px;
    border-left: 4px solid #E4405F;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    margin-bottom: 16px;
`;

const BadCommentText = styled(Typography)`
    font-size: 0.875rem;
    color: #000000;
    margin-bottom: 8px;
    font-weight: 500;
`;

const CommentType = styled(Typography)`
    font-size: 0.75rem;
    color: #E4405F;
    font-weight: 600;
    background: rgba(228, 64, 95, 0.1);
    padding: 4px 8px;
    border-radius: 4px;
    display: inline-block;
`; 