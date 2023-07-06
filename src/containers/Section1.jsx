import { Container,Box,Stack,Typography,Button } from '@mui/material'
import React from 'react'
import {section1Content} from '../utils/content'
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import LanchButton from '../components/Buttons/LanchButton'
const{MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
}=section1Content
const CustomButton=({children})=>(
  <Button variant='outlined' sx={{borderRadius:4, color:'text.primary' ,borderColor:'text.primary' ,height:58, px:3}}>{children}</Button>
  )

const Section1 = () => {
  return (
   <Box>
    <Box 
     >
      <img src={MainBG} alt="" style={{with:'100'}} />
    </Box>







    <Container  sx={{ height:'80vh'}}>
      <Stack sx={{height:'100%',}} justifyContent='center'>
      <Typography variant='h1' sx={{letterSpacing:'0.02em' ,mb:1}}> {title}</Typography>
      <Typography variant='h2' sx={{letterSpacing:'0.05em' ,mb:5}}> {subtitle}</Typography>
      <Stack direction={{xs:'column',md:'row'}} alignItems='center' spacing={4}>
      <LanchButton sx={{height:58 ,px:3}}/>
      <CustomButton><AppleIcon sx={{fontSize:36 }}/>
      <Stack sx={{textAlign:'left',ml:1}}>
        <Typography variant='caption' sx={{lineHeight:1}}>Download on the</Typography>
        <Typography variant='h5'>App Store</Typography>
      </Stack>
      </CustomButton>
      <CustomButton><GoogleIcon sx={{fontSize:34 ,ml:-1}}/>
      <Stack sx={{textAlign:'left',ml:1}}>
  <Typography variant='caption'sx={{lineHeight:1}} >Get in on</Typography>
  <Typography variant='h5'>Google Play</Typography>
</Stack>
      </CustomButton>
      </Stack>
       


      </Stack>
    </Container>

   </Box>
   
   
  )
}

export default Section1