import { Card, CardContent, Typography } from '@mui/material';

function UserCard(props) {
  const { name, company } = props.user;
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="h6">{company.name}</Typography>
        <Typography variant="subtitle1">{company.catchPhrase}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserCard;
