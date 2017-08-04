Vue.component('message',{
    "props":['album','index','like'],
    'template':`
      
       
    
 <div style="-moz-box-shadow: black;box-shadow: black;-o-box-shadow: black;text-shadow: black">
      <div class="thumbnail">
        <img :src="album.image" class="img-responsive" alt="Responsive image">
        <div class="caption">
          <h3 class="text-center">{{album.artist}}</h3>
          <a :href="album.url"><p class="text-center">{{album.title}}</p></a>
           <span @click="like += 1" class="glyphicon glyphicon-heart btn" style="background-color: red;color: white;margin-left: 40px;" aria-hidden="true"></span> <span class="badge" style="margin-bottom: 40px;margin-left: -10px;background-color: red;margin-right: 0px" v-if="like != 0">{{like}}</span>
          <a style="margin-left: 0px;" href="http://facebook.com/profile.php?=73322363"><span class="glyphicon glyphicon-share-alt btn btn-primary" aria-hidden="true"></span></a>
        </div>
     </div>
  </div>
    
    
    
         `,

         'data'(){
        return {
        }
    },


});


Vue.component('tool-bar',{
    'template':`
<nav class="navbar navbar navbar-static-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" style="background:url(2.jpg);background-size: 80% 100%">
            <ul class="nav navbar-nav">
                <li class="active"><img src="1.jpg" class="img-responsive" alt="Responsive image" style="width:40px;margin-top:7px;height:40px;"></li>
                <li class="active"><a style="color: white;text-shadow: 1px 1px 5px black;font-size:170%" href="#">Home <span class="sr-only">(current)</span></a></li>
                <li><a style="color: white;text-shadow: 1px 1px 5px black;font-size:170%" href="#">About</a></li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li  class="dropdown">
                    <a style="color: white;text-shadow: 1px 1px 5px black;font-size:170%" href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Acount <span class="caret"></span></a>
                    <ul  class="dropdown-menu">
                        <li><a href="#">Sign in</a></li>
                        <li><a href="#">Sign out</a></li>
                    </ul>
                </li>
            </ul>
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>




`,

    'data'(){
        return {

        }
    },

});





Vue.component('foot-bar',{
    'template':`

    <div class="col-lg-12 col-md-8 col-sm-12  " >
      <h1 class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1" style="color: black">Contact Us</h1>
      <h4 class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1" style="color: black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur eaque enim eveniet harum id ipsum, minus, necessitatibus non, nostrum obcaecati officia porro reiciendis reprehenderit similique temporibus velit veniam voluptate!</h4>
           <a class="col-lg-offset-1 col-md-offset-1 col-sm-offset-1 col-xs-offset-1 tramspamint" type="button" href="https://www.facebook.com/CodeLabBootcamp/" style="color: #ffffff ;"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span></a>
      <br><br>
    </div>

`,

    'data'(){
        return {

        }
    },

});
