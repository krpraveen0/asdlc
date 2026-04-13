"use client";

import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, Button } from "@mui/material";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { bridgeCourseModules, bridgeCourseInfo } from "@/data/bridge-course";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BookIcon from "@mui/icons-material/Book";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Link from "next/link";

export default function BridgeCoursePage() {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <Box
        sx={{
          pt: 16,
          pb: 8,
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="lg">
          <Chip
            label="Bridge Course"
            sx={{
              bgcolor: "rgba(0,212,255,0.1)",
              color: "primary.main",
              border: "1px solid rgba(0,212,255,0.3)",
              fontWeight: 600,
              mb: 3,
            }}
          />
          <Typography variant="h2" fontWeight={800} mb={2}>
            {bridgeCourseInfo.title}
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary", mb: 4, maxWidth: 700 }}>
            {bridgeCourseInfo.subtitle}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={4} mb={4}>
            {[
              { icon: <AccessTimeIcon />, label: bridgeCourseInfo.totalDuration },
              { icon: <BookIcon />, label: `${bridgeCourseInfo.totalModules} Modules` },
              { icon: <SignalCellularAltIcon />, label: bridgeCourseInfo.level },
            ].map((stat) => (
              <Stack key={stat.label} direction="row" alignItems="center" spacing={1}>
                <Box sx={{ color: "primary.main" }}>{stat.icon}</Box>
                <Typography variant="body1" fontWeight={600}>{stat.label}</Typography>
              </Stack>
            ))}
          </Stack>

          <Button
            component={Link}
            href="/#pricing"
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Enroll Now — $199
          </Button>
        </Container>
      </Box>

      {/* Modules */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight={700} mb={2}>
          Course Curriculum
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 6 }}>
          {bridgeCourseInfo.description}
        </Typography>

        <Grid container spacing={3}>
          {bridgeCourseModules.map((mod) => (
            <Grid item xs={12} sm={6} md={4} key={mod.id}>
              <Card
                sx={{
                  height: "100%",
                  transition: "transform 0.2s ease",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
                    <Typography variant="h6" fontWeight={700}>
                      {mod.title}
                    </Typography>
                    <Chip label={mod.duration} size="small" sx={{ bgcolor: "rgba(0,212,255,0.1)", color: "primary.main" }} />
                  </Stack>

                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    {mod.description}
                  </Typography>

                  <Stack spacing={0.5}>
                    {mod.topics.map((topic) => (
                      <Typography key={topic} variant="body2" sx={{ color: "text.secondary", display: "flex", alignItems: "center", gap: 1 }}>
                        <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "primary.main", flexShrink: 0, display: "inline-block" }} />
                        {topic}
                      </Typography>
                    ))}
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
