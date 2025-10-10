import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { ReviewType } from "../../../../../../../types/products";
import Rating from "@mui/material/Rating";

interface CommentBlockProps {
    data: ReviewType,
}

export const CommentBlock = ({ data }: CommentBlockProps) => {
    return (
        <Paper style={{ padding: "40px 20px", borderRadius: "0" }}>
            <Grid container wrap="nowrap" >
                <Grid width="100%" justifyContent="space-between" display="flex" >
                    <div>
                        <h4>{data.reviewerName}</h4>
                        <p>{data.comment}</p>
                    </div>
                    <div>
                        <Rating sx={{ color: "#000" }} size="small" name="read-only" value={data.rating} readOnly />
                    </div>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ marginTop: "30px" }} />
        </Paper>
    )
}