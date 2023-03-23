import { Card, CardContent, Typography } from '@mui/material';

function UserCard(props) {
  console.log(props
  );
  
  // const { name, company } = props.user;
  return (
    <Card>
      <CardContent>
        {/* <Typography variant="h5">{name}</Typography> */}
        <Typography variant="h6">{props.user.title}</Typography>
        <Typography variant="subtitle1">{props.user.userId}</Typography>
        <Typography variant="subtitle1">{props.user.id}</Typography>
        {/* <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">{company.name}</Typography>
        <Typography variant="subtitle1">{company.catchPhrase}</Typography> */}
      </CardContent>
    </Card>
  );
}

export default UserCard;
