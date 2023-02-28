export const imgAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: (custom: number)  => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2}
    }),
  }

  export const contentAnimation = {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: (custom: number)  => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2}
    }),
  }
  
  export const itemAnimation = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2}
    })
  }