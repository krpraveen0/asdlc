"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import { Box, Container, Typography, Grid, Card, CardContent, Stack, Chip, Button } from "@mui/material";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function AdminPage() {
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

  const stats = [
    { label: "Total Students", value: "0", icon: <PeopleIcon />, color: "#00d4ff" },
    { label: "Active Courses", value: "2", icon: <SchoolIcon />, color: "#7c3aed" },
    { label: "Completion Rate", value: "0%", icon: <TrendingUpIcon />, color: "#10b981" },
    { label: "Revenue", value: "$0", icon: <AttachMoneyIcon />, color: "#f59e0b" },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 14, pb: 8 }}>
        <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Box>
            <Typography variant="h3" fontWeight={800} mb={1}>
              Admin Dashboard
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              Manage courses, students, and content
            </Typography>
          </Box>
          <Chip label="Admin" sx={{ bgcolor: "rgba(239,68,68,0.1)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.3)", fontWeight: 700 }} />
        </Stack>

        {/* Stats */}
        <Grid container spacing={3} mb={6}>
          {stats.map((stat) => (
            <Grid item xs={6} md={3} key={stat.label}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Box sx={{ color: stat.color }}>{stat.icon}</Box>
                  </Stack>
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

        {/* Course Management */}
        <Typography variant="h4" fontWeight={700} mb={3}>
          Course Management
        </Typography>
        <Grid container spacing={3}>
          {[
            { title: "Bridge Course", students: 0, modules: 16, status: "Published", color: "#00d4ff", href: "/courses/bridge" },
            { title: "AI Engineering Pro", students: 0, modules: 21, status: "Published", color: "#7c3aed", href: "/courses/ai-engineering" },
          ].map((course) => (
            <Grid item xs={12} md={6} key={course.title}>
              <Card>
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                    <Typography variant="h6" fontWeight={700}>
                      {course.title}
                    </Typography>
                    <Chip label={course.status} size="small" sx={{ bgcolor: "rgba(16,185,129,0.1)", color: "#10b981" }} />
                  </Stack>
                  <Stack direction="row" spacing={3} mb={3}>
                    <Box>
                      <Typography variant="h5" sx={{ color: course.color, fontWeight: 700 }}>{course.students}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>Students</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ color: course.color, fontWeight: 700 }}>{course.modules}</Typography>
                      <Typography variant="caption" sx={{ color: "text.secondary" }}>Modules</Typography>
                    </Box>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" size="small" href={course.href} sx={{ borderColor: course.color, color: course.color }}>
                      View Course
                    </Button>
                    <Button variant="text" size="small" sx={{ color: "text.secondary" }}>
                      Edit
                    </Button>
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
