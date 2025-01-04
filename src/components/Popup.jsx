import React from 'react';
import './Popup.css';
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const PopupCard = ({ open, data, onClose }) => {
  if (!open) return null;

  return (
    <Box className="popup-overlay">
      <Card className="popup-card">
        <CardContent>
          <Box className="popup-header">
            <WarningAmberIcon fontSize="large" color="error" />
            <Typography variant="h6" className="popup-title">
              Disaster Warning
            </Typography>
          </Box>
          <Typography variant="body1" className="popup-message">
            <strong>Message:</strong> {data.message}
          </Typography>
          <Typography variant="body2" className="popup-confidence">
            <strong>Confidence Level:</strong> {data.confidence}%
          </Typography>
          <Typography variant="body2" className="popup-recommendation">
            <strong>Recommendation:</strong> {data.recommendation}
          </Typography>
          <Box className="popup-actions">
            <Button
              variant="contained"
              color="primary"
              onClick={onClose}
              startIcon={<CheckCircleIcon />}
            >
              Close
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PopupCard;
