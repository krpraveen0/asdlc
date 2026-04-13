import { SignIn } from "@clerk/nextjs";
import { Box, Container } from "@mui/material";

export default function SignInPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SignIn />
        </Box>
      </Container>
    </Box>
  );
}
