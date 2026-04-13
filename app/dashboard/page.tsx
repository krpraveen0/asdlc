"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Box, Container, Typography, Grid, Card, CardContent, LinearProgress, Stack, Button } from "@mui/material";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import SchoolIcon from "@mui/icons-material/School";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function DashboardPage() {
  const { userId, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded || !userId) {
    return null;
  }

  const enrolledCourses = [
    {
      id: "bridge",
      title: "Bridge Course: Python to AI Engineering",
      progress: 25,
      totalModules: 16,
      completedModules: 4,
      color: "#00d4ff",
      href: "/courses/bridge",
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 14, pb: 8 }}>
        <Typography variant="h3" fontWeight={800} mb={1}>
          Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 6 }}>
          Track your AI Engineering learning journey
        </Typography>

        {/* Stats */}
        <Grid container spacing={3} mb={6}>
          {[
            { label: "Courses Enrolled", value: "1", color: "#00d4ff" },
            { label: "Modules Completed", value: "4", color: "#7c3aed" },
            { label: "Hours Learned", value: "12", color: "#10b981" },
            { label: "Certificates", value: "0", color: "#f59e0b" },
          ].map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Card>
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Typography variant="h3" sx={{ color: stat.color, fontWeight: 800 }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {stat.label}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Enrolled Courses */}
        <Typography variant="h4" fontWeight={700} mb={3}>
          My Courses
        </Typography>
        <Grid container spacing={3} mb={6}>
          {enrolledCourses.map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                    <SchoolIcon sx={{ color: course.color }} />
                    <Typography variant="h6" fontWeight={700}>
                      {course.title}
                    </Typography>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" mb={1}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      Progress: {course.completedModules}/{course.totalModules} modules
                    </Typography>
                    <Typography variant="body2" sx={{ color: course.color, fontWeight: 600 }}>
                      {course.progress}%
                    </Typography>
                  </Stack>
                  <LinearProgress
                    variant="determinate"
                    value={course.progress}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: "rgba(255,255,255,0.08)",
                      "& .MuiLinearProgress-bar": { bgcolor: course.color, borderRadius: 4 },
                    }}
                  />
                  <Button component={Link} href={course.href} variant="outlined" size="small" sx={{ mt: 2, borderColor: course.color, color: course.color }}>
                    Continue Learning
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Explore More */}
        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            border: "1px solid rgba(124,58,237,0.3)",
            background: "linear-gradient(135deg, rgba(124,58,237,0.05), rgba(0,212,255,0.05))",
            textAlign: "center",
          }}
        >
          <RocketLaunchIcon sx={{ fontSize: 48, color: "#7c3aed", mb: 2 }} />
          <Typography variant="h5" fontWeight={700} mb={1}>
            Ready to Go Further?
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 3 }}>
            Upgrade to AI Engineering Pro and get access to the full 22-week curriculum.
          </Typography>
          <Button component={Link} href="/courses/ai-engineering" variant="contained" size="large">
            Explore AI Engineering Pro
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
