import { Box, Stack, Typography, Divider, Alert, Chip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoPlayer from "../components/VideoPlayer";
import VideoCard from "../components/VideoCard";
import ChannelCard from "../components/ChannelCard";
import Loader from "../components/Loader";
import { fetchFromAPI } from "../Utils/fetchFromAPI";

const VideoDetails = () => {
  const { id } = useParams();

  const {
    data: videoData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["video", id],
    queryFn: () => fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
    staleTime: 5 * 60 * 1000,
  });

  const { data: relatedData } = useQuery({
    queryKey: ["related", id],
    queryFn: () =>
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
    staleTime: 5 * 60 * 1000,
  });

  const { data: channelData } = useQuery({
    queryKey: ["channelSnippet", videoData?.items?.[0]?.snippet?.channelId],
    queryFn: () =>
      fetchFromAPI(
        `channels?part=snippet,statistics&id=${videoData?.items?.[0]?.snippet?.channelId}`,
      ),
    enabled: !!videoData?.items?.[0]?.snippet?.channelId,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <Alert
        severity="error"
        sx={{ m: 2, background: "#2a0000", color: "#ff6b6b" }}
      >
        Failed to load video. Please try again later.
      </Alert>
    );

  const video = videoData?.items?.[0];
  const { title, description, channelId } = video?.snippet || {};
  const { viewCount, likeCount } = video?.statistics || {};

  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={2} p={{ xs: 1, md: 2 }}>
      <Box flex={1} minWidth={0}>
        <VideoPlayer videoId={id} />
        <Typography variant="h6" color="#fff" mt={2} fontWeight={700}>
          {title}
        </Typography>
        <Stack direction="row" gap={2} mt={1} flexWrap="wrap">
          {viewCount && (
            <Chip
              icon={<VisibilityIcon sx={{ color: "#aaa !important" }} />}
              label={`${parseInt(viewCount).toLocaleString()} views`}
              sx={{ background: "#2a2a2a", color: "#aaa" }}
            />
          )}
          {likeCount && (
            <Chip
              icon={<ThumbUpIcon sx={{ color: "#aaa !important" }} />}
              label={`${parseInt(likeCount).toLocaleString()} likes`}
              sx={{ background: "#2a2a2a", color: "#aaa" }}
            />
          )}
        </Stack>
        <Divider sx={{ my: 2, borderColor: "#3d3d3d" }} />
        {channelData?.items?.[0] && (
          <ChannelCard
            channelDetail={{ ...channelData.items[0], id: { channelId } }}
          />
        )}
        <Divider sx={{ my: 2, borderColor: "#3d3d3d" }} />
        <Typography
          variant="body2"
          color="#aaa"
          sx={{ whiteSpace: "pre-line" }}
        >
          {description?.slice(0, 500)}
          {description?.length > 500 ? "..." : ""}
        </Typography>
      </Box>
      <Box sx={{ width: { xs: "100%", md: 360 } }}>
        <Typography variant="subtitle1" color="#fff" mb={1} fontWeight={600}>
          Related Videos
        </Typography>
        <Stack gap={1.5}>
          {relatedData?.items
            ?.filter((v) => v?.id?.videoId)
            .map((v) => (
              <VideoCard key={v.id.videoId} video={v} />
            ))}
        </Stack>
      </Box>
    </Stack>
  );
};

export default VideoDetails;
