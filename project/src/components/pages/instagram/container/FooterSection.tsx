import { Box, Typography, Divider, styled } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Shield, Email, Phone, Instagram, Twitter, YouTube } from "@mui/icons-material";

function FooterSection() {
    return (
        <Container>
            <FooterContent>
                <Grid2 container spacing={4}>
                    <Grid2 size={{ xs: 12, md: 4 }}>
                        <LogoSection>
                            <LogoContainer>
                                <Shield sx={{ fontSize: 32, color: '#E4405F' }} />
                                <ServiceName>CommentGuard</ServiceName>
                            </LogoContainer>
                            <ServiceDescription>
                                AI 기반 인스타그램 댓글 자동 관리 시스템으로<br />
                                깨끗하고 안전한 소셜미디어 환경을 만들어갑니다.
                            </ServiceDescription>
                            <SocialLinks>
                                <SocialIcon>
                                    <Instagram sx={{ fontSize: 20, color: '#cccccc' }} />
                                </SocialIcon>
                                <SocialIcon>
                                    <Twitter sx={{ fontSize: 20, color: '#cccccc' }} />
                                </SocialIcon>
                                <SocialIcon>
                                    <YouTube sx={{ fontSize: 20, color: '#cccccc' }} />
                                </SocialIcon>
                            </SocialLinks>
                        </LogoSection>
                    </Grid2>
                    
                    <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                        <FooterBlock>
                            <FooterTitle>서비스</FooterTitle>
                            <FooterLinkList>
                                <FooterLink href="#">악플 자동 삭제</FooterLink>
                                <FooterLink href="#">스팸 필터링</FooterLink>
                                <FooterLink href="#">실시간 모니터링</FooterLink>
                                <FooterLink href="#">상세 리포트</FooterLink>
                            </FooterLinkList>
                        </FooterBlock>
                    </Grid2>
                    
                    <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                        <FooterBlock>
                            <FooterTitle>지원</FooterTitle>
                            <FooterLinkList>
                                <FooterLink href="#">도움말 센터</FooterLink>
                                <FooterLink href="#">사용 가이드</FooterLink>
                                <FooterLink href="#">FAQ</FooterLink>
                                <FooterLink href="#">기술 지원</FooterLink>
                            </FooterLinkList>
                        </FooterBlock>
                    </Grid2>
                    
                    <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                        <FooterBlock>
                            <FooterTitle>회사</FooterTitle>
                            <FooterLinkList>
                                <FooterLink href="#">회사 소개</FooterLink>
                                <FooterLink href="#">채용 정보</FooterLink>
                                <FooterLink href="#">언론 보도</FooterLink>
                                <FooterLink href="#">파트너십</FooterLink>
                            </FooterLinkList>
                        </FooterBlock>
                    </Grid2>
                    
                    <Grid2 size={{ xs: 12, sm: 6, md: 2 }}>
                        <FooterBlock>
                            <FooterTitle>연락처</FooterTitle>
                            <ContactInfo>
                                <ContactItem>
                                    <Email sx={{ fontSize: 16, color: '#666' }} />
                                    <ContactText>m3088787@gmail.com</ContactText>
                                </ContactItem>
                                <ContactItem>
                                    <Phone sx={{ fontSize: 16, color: '#666' }} />
                                    <ContactText>010-2041-5761</ContactText>
                                </ContactItem>
                            </ContactInfo>
                        </FooterBlock>
                    </Grid2>
                </Grid2>
            </FooterContent>
            
            <Divider sx={{ margin: '40px 0', backgroundColor: '#e0e0e0' }} />
            
            <BottomSection>
                <LegalLinks>
                    <LegalLink href="#">이용약관</LegalLink>
                    <PrivacyLink href="#">개인정보처리방침</PrivacyLink>
                    <LegalLink href="#">환불정책</LegalLink>
                    <LegalLink href="#">쿠키정책</LegalLink>
                </LegalLinks>
                
                <Copyright>
                    <CopyrightText>
                        © 2024 CommentGuard. All rights reserved.
                    </CopyrightText>
                    <CompanyInfo>
                        사업자등록번호: 123-45-67890 | 대표: 홍길동<br />
                        서울특별시 강남구 테헤란로 123 (역삼동, ABC빌딩 5층)
                    </CompanyInfo>
                </Copyright>
            </BottomSection>
        </Container>
    );
}

export default FooterSection;

const Container = styled(Box)`
    padding: 80px 20px 40px 20px;
    background: #000000;
    border-top: 1px solid #333333;
    color: #ffffff;
`;

const FooterContent = styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
`;

const LogoSection = styled(Box)`
    
`;

const LogoContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
`;

const ServiceName = styled(Typography)`
    font-size: 1.5rem;
    font-weight: 700;
    color: #ffffff;
`;

const ServiceDescription = styled(Typography)`
    font-size: 0.875rem;
    color: #cccccc;
    line-height: 1.6;
    margin-bottom: 24px;
`;

const SocialLinks = styled(Box)`
    display: flex;
    gap: 16px;
`;

const SocialIcon = styled(Box)`
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
`;

const FooterBlock = styled(Box)`
    
`;

const FooterTitle = styled(Typography)`
    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 16px;
`;

const FooterLinkList = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const FooterLink = styled('a')`
    font-size: 0.875rem;
    color: #cccccc;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
    display: block;
    margin-bottom: 4px;
    
    &:hover {
        color: #E4405F;
        text-decoration: none;
    }
`;

const ContactInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ContactItem = styled(Box)`
    display: flex;
    align-items: center;
    gap: 8px;
`;

const ContactText = styled(Typography)`
    font-size: 0.875rem;
    color: #cccccc;
`;

const BottomSection = styled(Box)`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const LegalLinks = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    
    @media (max-width: 600px) {
        gap: 16px;
    }
`;

const LegalLink = styled('a')`
    font-size: 0.75rem;
    color: #cccccc;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
    
    &:hover {
        color: #E4405F;
        text-decoration: none;
    }
`;

const PrivacyLink = styled('a')`
    font-size: 0.75rem;
    color: #ffffff;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s ease;
    
    &:hover {
        color: #E4405F;
        text-decoration: none;
    }
`;

const Copyright = styled(Box)`
    text-align: left;
    
    @media (min-width: 768px) {
        text-align: right;
    }
`;

const CopyrightText = styled(Typography)`
    font-size: 0.75rem;
    color: #cccccc;
    margin-bottom: 4px;
`;

const CompanyInfo = styled(Typography)`
    font-size: 0.625rem;
    color: #999999;
    line-height: 1.4;
`; 