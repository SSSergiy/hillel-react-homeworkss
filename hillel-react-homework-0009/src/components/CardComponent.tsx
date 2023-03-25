import { Card, CardContent, Typography } from '@mui/material';

function UserCard(props) {
  // console.log(props);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{props.user.title}</Typography>
        <Typography variant="subtitle1">{props.user.userId}</Typography>
        <Typography variant="subtitle1">{props.user.id}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
