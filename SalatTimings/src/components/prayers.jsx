import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ nom, duree, image }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
                }
            }}
        >
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={nom}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white', fontWeight: 600 }}>
                    {nom}
                </Typography>
                <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, fontSize: '2.5rem' }}>
                    {duree}
                </Typography>
            </CardContent>
        </Card>
    );
}