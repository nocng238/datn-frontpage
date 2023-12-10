import { ReviewDetail } from "@app/pages/doctor/types";
import { Avatar, Card, Rating, Typography } from "@material-tailwind/react";
import moment from "moment";
interface Props {
  reviewDetail: ReviewDetail;
}
const ReviewCard = (props: Props) => {
  const { reviewDetail } = props;
  return (
    <Card className="flex flex-col gap-4 p-2">
      <Rating value={reviewDetail.review.rating} readonly />
      <Typography>{reviewDetail.review.feedback}</Typography>
      <div className="flex items-center gap-4">
        <Avatar
          src={reviewDetail.client.avatar}
          alt="avatar"
          className="object-cover"
        />
        <div>
          <Typography variant="h6">{reviewDetail.client.fullname}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {moment(reviewDetail.review.createdAt).format("YYYY-MM-DD")}
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
