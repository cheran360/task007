import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress } from '@mui/material';
import { Card, CardContent} from '@mui/material';

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.gyanibooks.com/library/get_dummy_notes');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Data from Given API
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <ul>
          {data.map((item) => (
            <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                {item.id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.uuid}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.user}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              notes(not sure what's inside this, need more info to proceed):
              <hr/>
              {item.notes}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <hr/>
                {item.date_created}
              </Typography>
            </CardContent>
          </Card>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default DataFetching;

