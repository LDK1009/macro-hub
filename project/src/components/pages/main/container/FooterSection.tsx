import { mixinFlex } from "@/styles/mixins";
import { Box, Container, Grid2, Stack, styled, Typography, Link } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    서비스: [
      { name: "오토프레스", href: "/autopress" },
      { name: "인스타그램", href: "/instagram" },
      { name: "요금제", href: "#pricing" },
    ],
    회사: [
      { name: "회사소개", href: "#about" },
      { name: "이용약관", href: "#terms" },
      { name: "개인정보처리방침", href: "#privacy" },
    ],
    지원: [
      { name: "고객센터", href: "#support" },
      { name: "FAQ", href: "#faq" },
      { name: "개발자 문서", href: "#docs" },
    ],
  };

  function goToForm() {
    window.open("https://naver.me/xum7Y6dN", "_blank");
  }

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <FooterContent>
          <Grid2 container>
            <Grid2 size={4}>
              <CompanySection>
                <Typography variant="h5" fontWeight="bold" gutterBottom color="primary.main">
                  매크로 허브
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                  1인 창업가를 위한 가장 강력한 매크로 플랫폼. <br />
                  AI 기반 자동화로 비즈니스를 한 단계 업그레이드하세요.
                </Typography>

                <ContactInfo>
                  <ContactItem>
                    <Email sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">m3088787@gmail.com</Typography>
                  </ContactItem>
                  <ContactItem>
                    <Phone sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2">010-2041-5761</Typography>
                  </ContactItem>
                  <ContactItem>
                    <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                    <Typography variant="body2"> 서울특별시 강남구 테헤란로 128, 3층 379호</Typography>
                  </ContactItem>
                </ContactInfo>
              </CompanySection>
            </Grid2>

            {Object.entries(footerLinks).map(([category, links]) => (
              <Grid2 key={category} size={2}>
                <LinkSection>
                  <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
                    {category}
                  </Typography>
                  <LinkList>
                    {links.map((link) => (
                      <li key={link.name}>
                        <FooterLink href={link.href} onClick={() => goToForm()}>
                          {link.name}
                        </FooterLink>
                      </li>
                    ))}
                  </LinkList>
                </LinkSection>
              </Grid2>
            ))}

            <Grid2 size={2}>
              <NewsletterSection>
                <Typography variant="h6" fontWeight="bold" gutterBottom color="primary.main">
                  소식받기
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  새로운 기능과 업데이트 소식을 가장 먼저 받아보세요.
                </Typography>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: "bold", cursor: "pointer" }}
                  onClick={() => goToForm()}
                >
                  곧 출시 예정
                </Typography>
              </NewsletterSection>
            </Grid2>
          </Grid2>
        </FooterContent>

        <Divider />

        <BottomSection>
          <Typography variant="body2" color="text.secondary">
            © {currentYear} 매크로 허브. All rights reserved.
          </Typography>
        </BottomSection>
      </Container>
    </FooterContainer>
  );
};

export default FooterSection;

const FooterContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[50]};
  padding: 80px 0 40px;
  margin-top: 100px;
`;

const FooterContent = styled(Box)`
  margin-bottom: 40px;
`;

const CompanySection = styled(Stack)`
  height: 100%;
`;

const ContactInfo = styled(Stack)`
  gap: 12px;
`;

const ContactItem = styled(Stack)`
  ${mixinFlex("row", "flex-start", "center")}
  color: ${({ theme }) => theme.palette.text.secondary};
`;

const LinkSection = styled(Stack)`
  height: 100%;
`;

const LinkList = styled("ul")`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 12px;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.secondary};
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
  }

  transition: color 0.2s ease;
`;

const NewsletterSection = styled(Stack)`
  height: 100%;
`;

const Divider = styled(Box)`
  height: 1px;
  background-color: ${({ theme }) => theme.palette.divider};
  margin: 40px 0;
`;

const BottomSection = styled(Stack)`
  ${mixinFlex("row", "space-between", "center")}

  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
`;
