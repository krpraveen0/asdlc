"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolIcon from "@mui/icons-material/School";
import Link from "next/link";
import { UserButton, SignInButton, SignUpButton, useAuth } from "@clerk/nextjs";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Bridge Course", href: "/courses/bridge" },
  { label: "AI Engineering", href: "/courses/ai-engineering" },
  { label: "Pricing", href: "/#pricing" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: "rgba(10, 10, 15, 0.9)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <SchoolIcon sx={{ color: "primary.main", mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 700,
              background: "linear-gradient(135deg, #00d4ff, #7c3aed)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI Engineering Academy
          </Typography>

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                >
                  {link.label}
                </Button>
              ))}
              {isSignedIn ? (
                <>
                  <Button component={Link} href="/dashboard" variant="outlined" color="primary" size="small" sx={{ mx: 1 }}>
                    Dashboard
                  </Button>
                  <UserButton />
                </>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button variant="outlined" color="primary" size="small">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button variant="contained" color="primary" size="small">
                      Get Started
                    </Button>
                  </SignUpButton>
                </>
              )}
            </Box>
          )}

          {isMobile && (
            <IconButton color="inherit" onClick={() => setMobileOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 250, bgcolor: "background.paper", height: "100%" }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} component={Link} href={link.href} onClick={() => setMobileOpen(false)}>
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
