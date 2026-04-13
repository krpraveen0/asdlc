"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";

const plans = [
  {
    title: "Bridge Course",
    price: "$199",
    period: "one-time",
    description: "Perfect for beginners transitioning to AI engineering",
    features: [
      "16 comprehensive modules",
      "Python to AI engineering path",
      "Hands-on projects",
      "Community access",
      "Certificate of completion",
    ],
    cta: "Enroll in Bridge Course",
    href: "/courses/bridge",
    featured: false,
    color: "#00d4ff",
  },
  {
    title: "AI Engineering Pro",
    price: "$999",
    period: "full program",
    description: "Complete 22-week production AI Engineering curriculum",
    features: [
      "Everything in Bridge Course",
      "22-week AI Engineering curriculum",
      "Live mentorship sessions",
      "Real-world capstone project",
      "Job placement support",
      "Lifetime access",
      "Industry expert reviews",
    ],
    cta: "Enroll Now",
    href: "/courses/ai-engineering",
    featured: true,
    color: "#7c3aed",
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "per team",
    description: "Custom training for engineering teams",
    features: [
      "Everything in Pro",
      "Custom curriculum",
      "Dedicated instructor",
      "Private cohorts",
      "Progress tracking dashboard",
      "SLA support",
    ],
    cta: "Contact Us",
    href: "mailto:hello@aiengineeringacademy.com",
    featured: false,
    color: "#10b981",
  },
];

export function Pricing() {
  return (
    <Box
      id="pricing"
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
            PRICING
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
            Invest in Your AI Career
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 500, mx: "auto" }}>
            Choose the path that fits your goals. All plans include lifetime access to course materials.
          </Typography>
        </Box>

        <Grid container spacing={3} alignItems="center">
          {plans.map((plan) => (
            <Grid item xs={12} md={4} key={plan.title}>
              <Card
                sx={{
                  position: "relative",
                  border: plan.featured
                    ? `2px solid ${plan.color}`
                    : "1px solid rgba(255,255,255,0.08)",
                  transform: plan.featured ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: plan.featured ? "scale(1.07)" : "scale(1.02)",
                  },
                }}
              >
                {plan.featured && (
                  <Chip
                    label="Most Popular"
                    size="small"
                    sx={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      bgcolor: plan.color,
                      color: "white",
                      fontWeight: 700,
                    }}
                  />
                )}
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight={700} mb={1}>
                    {plan.title}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "baseline", gap: 0.5, mb: 1 }}>
                    <Typography variant="h3" sx={{ color: plan.color, fontWeight: 800 }}>
                      {plan.price}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      / {plan.period}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                    {plan.description}
                  </Typography>

                  <List dense>
                    {plan.features.map((feature) => (
                      <ListItem key={feature} disablePadding sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon sx={{ fontSize: 18, color: plan.color }} />
                        </ListItemIcon>
                        <ListItemText
                          primary={feature}
                          primaryTypographyProps={{ variant: "body2" }}
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    component={Link}
                    href={plan.href}
                    fullWidth
                    variant={plan.featured ? "contained" : "outlined"}
                    sx={{
                      mt: 3,
                      borderColor: plan.color,
                      color: plan.featured ? "white" : plan.color,
                      ...(plan.featured && {
                        background: `linear-gradient(135deg, ${plan.color}, #00d4ff)`,
                      }),
                    }}
                  >
                    {plan.cta}
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
