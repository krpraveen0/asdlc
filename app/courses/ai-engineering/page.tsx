"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { aiEngineeringCurriculum } from "@/data/ai-engineering-curriculum";
import Link from "next/link";

const phaseColors = ["#00d4ff", "#7c3aed", "#10b981", "#f59e0b", "#ef4444"];

export default function AIEngineeringPage() {
  const [expandedPhase, setExpandedPhase] = useState<string>("phase-1");

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
            label="AI Engineering Pro"
            sx={{
              bgcolor: "rgba(124,58,237,0.1)",
              color: "#a855f7",
              border: "1px solid rgba(124,58,237,0.3)",
              fontWeight: 600,
              mb: 3,
            }}
          />
          <Typography variant="h2" fontWeight={800} mb={2}>
            AI Engineering Curriculum
          </Typography>
          <Typography variant="h5" sx={{ color: "text.secondary", mb: 4, maxWidth: 700 }}>
            A 22-week structured program covering everything from LLM APIs to production-grade MLOps and cloud infrastructure.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3} mb={4} flexWrap="wrap">
            {[
              { label: "22 Weeks", color: "#00d4ff" },
              { label: "5 Phases", color: "#7c3aed" },
              { label: "21 Modules", color: "#10b981" },
              { label: "100+ Deliverables", color: "#f59e0b" },
            ].map((stat) => (
              <Chip key={stat.label} label={stat.label} sx={{ bgcolor: `${stat.color}18`, color: stat.color, border: `1px solid ${stat.color}44`, fontWeight: 700, fontSize: "0.9rem", py: 2 }} />
            ))}
          </Stack>

          <Button
            component={Link}
            href="/#pricing"
            variant="contained"
            size="large"
            sx={{ px: 4, py: 1.5 }}
          >
            Enroll Now — $999
          </Button>
        </Container>
      </Box>

      {/* Curriculum */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" fontWeight={700} mb={6}>
          Full Curriculum
        </Typography>

        <Stack spacing={2}>
          {aiEngineeringCurriculum.map((phase, phaseIdx) => (
            <Accordion
              key={phase.id}
              expanded={expandedPhase === phase.id}
              onChange={() => setExpandedPhase(expandedPhase === phase.id ? "" : phase.id)}
              sx={{
                bgcolor: "background.paper",
                border: `1px solid ${phaseColors[phaseIdx % phaseColors.length]}33`,
                borderRadius: "12px !important",
                "&:before": { display: "none" },
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 3, py: 1 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: phaseColors[phaseIdx % phaseColors.length],
                    }}
                  />
                  <Typography variant="h5" fontWeight={700}>
                    {phase.title}
                  </Typography>
                  <Chip
                    label={`${phase.weeks.length} weeks`}
                    size="small"
                    sx={{
                      bgcolor: `${phaseColors[phaseIdx % phaseColors.length]}18`,
                      color: phaseColors[phaseIdx % phaseColors.length],
                    }}
                  />
                </Stack>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 3, pb: 3 }}>
                <Grid container spacing={2}>
                  {phase.weeks.map((week) => (
                    <Grid item xs={12} md={6} key={week.id}>
                      <Card
                        sx={{
                          border: `1px solid ${phaseColors[phaseIdx % phaseColors.length]}22`,
                          bgcolor: "rgba(255,255,255,0.02)",
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                            <Typography variant="subtitle2" sx={{ color: phaseColors[phaseIdx % phaseColors.length], fontWeight: 700 }}>
                              Week {week.weekNumber}
                            </Typography>
                          </Stack>

                          <Typography variant="h6" fontWeight={600} mb={2}>
                            {week.title}
                          </Typography>

                          <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                            Topics
                          </Typography>
                          <Stack spacing={0.5} mb={2}>
                            {week.topics.map((topic) => (
                              <Typography key={topic} variant="body2" sx={{ color: "text.secondary", display: "flex", alignItems: "center", gap: 1 }}>
                                <Box component="span" sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: phaseColors[phaseIdx % phaseColors.length], flexShrink: 0, display: "inline-block" }} />
                                {topic}
                              </Typography>
                            ))}
                          </Stack>

                          <Typography variant="overline" sx={{ color: "text.secondary", display: "block", mb: 1 }}>
                            Deliverables
                          </Typography>
                          <Stack spacing={0.5}>
                            {week.deliverables.map((d) => (
                              <Stack key={d} direction="row" alignItems="center" spacing={1}>
                                <CheckCircleIcon sx={{ fontSize: 14, color: "#10b981" }} />
                                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                  {d}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
}
