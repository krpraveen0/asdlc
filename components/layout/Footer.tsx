"use client";

import { Box, Container, Typography, Grid, Link as MuiLink, Stack, Divider } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const footerLinks = {
  Courses: [
    { label: "Bridge Course", href: "/courses/bridge" },
    { label: "AI Engineering Pro", href: "/courses/ai-engineering" },
    { label: "Pricing", href: "/#pricing" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "mailto:hello@aiengineeringacademy.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0a0a0f",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        pt: 8,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" alignItems="center" spacing={1} mb={2}>
              <SchoolIcon sx={{ color: "primary.main" }} />
              <Typography
                variant="h6"
                fontWeight={700}
                sx={{
                  background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI Engineering Academy
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary", maxWidth: 280, lineHeight: 1.7 }}>
              Building the next generation of AI Engineers. From Python fundamentals to production-grade LLM systems.
            </Typography>
            <Stack direction="row" spacing={1} mt={2}>
              <MuiLink href="https://github.com" target="_blank" sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>
                <GitHubIcon />
              </MuiLink>
              <MuiLink href="https://linkedin.com" target="_blank" sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>
                <LinkedInIcon />
              </MuiLink>
              <MuiLink href="https://twitter.com" target="_blank" sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}>
                <TwitterIcon />
              </MuiLink>
            </Stack>
          </Grid>

          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid item xs={6} md={2} key={section}>
              <Typography variant="subtitle2" fontWeight={700} mb={2} sx={{ color: "text.primary" }}>
                {section}
              </Typography>
              <Stack spacing={1}>
                {links.map((link) => (
                  <MuiLink
                    key={link.href}
                    component={Link}
                    href={link.href}
                    variant="body2"
                    sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { color: "primary.main" } }}
                  >
                    {link.label}
                  </MuiLink>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 3 }} />
        <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
          © {new Date().getFullYear()} AI Engineering Academy. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
