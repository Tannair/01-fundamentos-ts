import { ImgHTMLAttributes } from 'react'; 
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

// tiramos a propriedade hasBorder dos parametros e usamos o REST OPERATOR para passar
// o restando dos valores para um objeto chamado props
// depois utlizamos o SPREAD OPERATOR para recuperar os valores e passar como propriedades pra tag img 

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <img 
        className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        {...props}
    />
  )
}
