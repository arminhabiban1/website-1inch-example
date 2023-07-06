import { Container,Box,Stack,Typography,Button, Hidden } from '@mui/material'
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
    <Box sx={{position:'fixed', zIndex:-10,top:0,left:0,right:0 }} >
      <img src={MainBG} alt="" style={{width:'100%'}} />
    </Box>
    <Box sx={{position:'absolute', width:'100%',zIndex:-1,top:0,left:0,right:0 }}>
      <img src={MainBG} alt="" style={{width:'100%' ,opacity:0}} />
      <img src={ShootingStarImage}
       style={{position:'absolute',
       top:'30px',
       right:'15%',
       width:'500px'
      }}
       />
       <Hidden mdDown >
      <img src={TreesImage} style={{position:'absolute',width:'100%',top:0,left:0,right:0}} />
      </Hidden>
      <img src={CliffImage} style={{position:'absolute' ,top:0,right:0 ,backgroundSize:'cover',height:'100%'}}/>
      <img src={HorseImage}  style={{position:'absolute' ,height:'38%' ,right:'14%', bottom:'45%',transform:'rotate(7deg)'}}/>
      <Box sx={{bgcolor:'Background.default',position:'absolute',bottom:'0',left:0,right:0,height:'500px'}}></Box>
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