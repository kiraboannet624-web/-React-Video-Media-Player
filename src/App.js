 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/Navbar";
import Feed from "./Pages/feed";
import VideoDetails from "./Pages/VideoDetails";
import ChannelDetails from "./Pages/ChannelDetails";
import SearchFeed from "./Pages/SearchFeed";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#0f0f0f", minHeight: "100vh" }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetails />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;