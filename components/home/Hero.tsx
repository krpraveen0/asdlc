"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button, Container, Chip, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Link from "next/link";

const typewriterTexts = [
  "LLM Engineers",
  "MLOps Engineers",
  "AI Architects",
  "Cloud AI Specialists",
  "Prompt Engineers",
];

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = typewriterTexts[currentText];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < target.length) {
      timeout = setTimeout(() => setDisplayText(target.slice(0, displayText.length + 1)), 100);
    } else if (!isDeleting && displayText.length === target.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentText((prev) => (prev + 1) % typewriterTexts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentText]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Chip
            label="🚀 Now enrolling for 2025 cohort"
            sx={{
              bgcolor: "rgba(0,212,255,0.1)",
              color: "primary.main",
              border: "1px solid rgba(0,212,255,0.3)",
              fontWeight: 600,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              color: "text.primary",
            }}
          >
            Train World-Class{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {displayText}
              <Box component="span" sx={{ animation: "blink 1s step-end infinite", WebkitTextFillColor: "#00d4ff" }}>
                |
              </Box>
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              maxWidth: 700,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            A 22-week production-ready AI Engineering curriculum covering LLMs, MLOps, Cloud Infrastructure, Terraform,
            and system design. From fundamentals to deployment.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
            <Button
              component={Link}
              href="/courses/ai-engineering"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              Explore Curriculum
            </Button>
            <Button
              component={Link}
              href="/courses/bridge"
              variant="outlined"
              size="large"
              startIcon={<PlayCircleIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              Bridge Course
            </Button>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
            {[
              { value: "22", label: "Weeks" },
              { value: "150+", label: "Topics" },
              { value: "5", label: "Phases" },
              { value: "∞", label: "Projects" },
            ].map((stat) => (
              <Box key={stat.label} textAlign="center">
                <Typography variant="h4" sx={{ color: "primary.main", fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </Box>
  );
}
