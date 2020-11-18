

export default {
  /*
          // 一  payload添加商品
    //   let oldProduct = null ;
    //   for(let item of state.cartList){
    //     if(item.id === payload.id){
    //       oldProduct =item
    //     }
    //   }
    //   if(oldProduct){
    //     oldProduct.count += 1
    //   }else{
    //     payload.count = 1;
    //     state.cartList.push(payload)
    //   }
    // }


    // // 二 payload添加商品
    // let index = state.cartList.indexOf(payload)
    //   if(index === -1){
    //     let oldProduct =state.cartList[index]
    //     oldProduct.count+=1 
    //   }else{
    //     payload.count=1
    //     state.cartList.push(payload)
    //   }*/
  addCartPush({commit},payload){
    //  三 payload添加商品
     return new Promise((resolve)=>{
        let oldProduct = this.state.cartList.find(item =>
          item.id === payload.id)
        if(oldProduct){
          commit('addCounter',oldProduct)
          resolve('商品添加成功+1')
        }
        else{
          payload.count = 1;
          commit('addToCart',payload)
          resolve('商品添加成功')
        }
      })
    }
  }