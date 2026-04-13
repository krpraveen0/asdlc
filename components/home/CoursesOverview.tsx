"use client";

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BridgeIcon from "@mui/icons-material/SwapHoriz";
import RocketIcon from "@mui/icons-material/RocketLaunch";
import Link from "next/link";

const courses = [
  {
    icon: <BridgeIcon sx={{ fontSize: 40, color: "#00d4ff" }} />,
    title: "Bridge Course",
    subtitle: "Python to AI Engineering",
    description:
      "Perfect for software engineers and Python developers looking to transition into AI/ML. A structured 16-week path from Python basics to production AI systems.",
    highlights: ["16 Weeks", "Beginner Friendly", "Hands-on Projects", "Certificate"],
    tags: ["Python", "ML Basics", "NLP", "MLOps", "LLMs"],
    cta: "View Bridge Course",
    href: "/courses/bridge",
    color: "#00d4ff",
  },
  {
    icon: <RocketIcon sx={{ fontSize: 40, color: "#7c3aed" }} />,
    title: "AI Engineering Pro",
    subtitle: "22-Week Production Curriculum",
    description:
      "For engineers ready to build production AI systems. Deep dives into LLMs, RAG, MLOps, Kubernetes, Terraform, and system design at scale.",
    highlights: ["22 Weeks", "5 Phases", "Capstone Project", "Job Support"],
    tags: ["LLMs", "RAG", "MLOps", "Kubernetes", "Terraform"],
    cta: "View Full Curriculum",
    href: "/courses/ai-engineering",
    color: "#7c3aed",
  },
];

export function CoursesOverview() {
  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(180deg, #0a0a0f 0%, #12121a 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", letterSpacing: 3, fontWeight: 600 }}
          >
            COURSES
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Two Paths to AI Mastery
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", maxWidth: 500, mx: "auto" }}
          >
            Whether you&apos;re just starting out or ready to go deep, we have a curriculum for you.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item xs={12} md={6} key={course.title}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: `0 20px 40px rgba(0,0,0,0.3)`,
                  },
                  border: `1px solid ${course.color}22`,
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box mb={2}>{course.icon}</Box>
                  <Typography variant="h4" fontWeight={700} mb={0.5}>
                    {course.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: course.color, fontWeight: 600, mb: 2 }}
                  >
                    {course.subtitle}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "text.secondary", mb: 3, lineHeight: 1.7 }}>
                    {course.description}
                  </Typography>

                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={3}>
                    {course.highlights.map((h) => (
                      <Chip
                        key={h}
                        label={h}
                        size="small"
                        sx={{
                          bgcolor: `${course.color}18`,
                          color: course.color,
                          border: `1px solid ${course.color}44`,
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} mb={4}>
                    {course.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{ borderColor: "rgba(255,255,255,0.15)", color: "text.secondary" }}
                      />
                    ))}
                  </Stack>

                  <Button
                    component={Link}
                    href={course.href}
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      background: `linear-gradient(135deg, ${course.color}, ${course.color}aa)`,
                      "&:hover": {
                        background: `linear-gradient(135deg, ${course.color}cc, ${course.color}88)`,
                      },
                    }}
                  >
                    {course.cta}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
