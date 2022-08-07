import React from "react";
import JupyterViewer from "react-jupyter-notebook";
import projectNotebook from "./projectNotebook.json"
export const ProjectData = [
   {
      id: 0,
      title: "TuxKart Ice Hockey Image Agent",
      body: (
         <div className="bg-gray-900">
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Introduction</h1>

            <p>
               For our final project in CS342, we were tasked with programming a machine learning model that could
               play ice hockey in the SuperTuxKart racing game. Our model needed to be able to win against various
               pre-written agents in 2v2 tournaments where points are earned by scoring the hockey puck into the
               other team’s goal. After the game’s time limit, the winner is the team with the most goals scored.
               We elected to work on this project by building out an image-based agent because we were more
               comfortable tuning the vision component of our agent. See the Project here:&nbsp;
               <a className="mr-5 decoration-blue underline hover:text-white" href="https://github.com/nalin29/nn_final">
                  https://github.com/nalin29/nn_final
               </a>
            </p>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Model</h1>

            <p>
               Our model is a fully convolutional network with 32 channels, 64 channels, and 128 channels
               along with up-convolutional channels in reverse channel size. We gathered our starting data
               for training the model by running the given agents against each other. This method gave us
               good results in the initial training, but when we wrote our controller, it struggled, and
               there were a lot of edge cases that we were having trouble with solving. To combat this,
               we did some dagger-style runs where we collected data from one run and trained a new model
               using it while getting rid of the older data. We continued this process 12 times before we
               thought our model was good enough. We further tried to improve our model by testing out a
               few different loss functions, and we saw the best results when using a binary cross-entropy
               loss function.
            </p>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Controller</h1>
            <p>
               For our controller, we decided to go with a hand-tuned one rather than one of the
               provided ones. Our controller detects the puck and estimates the location of its
               center point. To do this, we built off of previous code from the third homework to
               try and segment out the puck from the current image. After segmenting the puck,
               we utilized a similar peak detection process to that from the fifth homework.
               If the puck is on the screen, then we treat it similarly to the aim point
               from the fifth homework assignment. Once the puck has been located,
               we determine the angle to the other team’s goal by taking the dot product
               and the arccosine. This math is easy to do because we have the location of
               both our players, and the enemy goal doesn’t move. In the case that the
               angle is very large or very small, our controller aims at the center of the puck.
               Otherwise, we try to offset the aim by hitting slightly to the left or right of
               the puck depending on the angle. The amount that we hit the puck by is determined
               by an inverse function of the distance to the goal because as the players get
               closer to the goal, the angle becomes more extreme. After a bit of testing,
               we realized that we were able to get similar results to this by hard-coding
               a constant amount left or right when we are within a small enough threshold
               distance from the enemy goal. When the puck is not on the screen, the
               controller looks to see if it has seen the puck recently. In this case that it
               has, the controller assumes that the puck is in the last location that it was
               seen at and plays accordingly. When the controller hasn’t seen the puck recently,
               it enters a “lost mode” where the player reverses backward towards their own goal
               to try and widen the amount of the map that they can see. To do this, we calculate
               the angle that we have to travel in to get to our goal and go backward in that
               direction. One problem that we noticed with this is that once we reached our goal,
               the puck could be too far away to see. While in this “lost mode,” our player kind
               of became a goalie in that it stayed around the goal. To fix this, we added a timer
               for the time we spent near the goal without seeing the puck. After the timer ran out,
               our player would travel towards the opponent's goal looking for the puck.
            </p>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Experimentation</h1>
            <p>
               While coming up with a solution, we tried experimenting with a few different strategies.
               One example of this is that we messed around with choosing different karts for our members.
               While testing them out in different trial runs, we found that choosing Wilber increased the
               probability of hitting the puck with our strategy because of his bigger hitbox. After trying
               different combinations, we concluded that having both our players use the Wilber kart led to
               the best results. Another thing we tried was having the two players on our team perform
               different functions. We realized that our “lost mode” made the cars resemble goalies, and
               we thought that it would be interesting to see how our team would perform if we made one
               of the players act as a goalie for the entire game. To do this, we messed with the lost
               mode to make the goalie car immediately go back to its goal. This goalie car would then
               stay within a small range of the goal for the rest of the game trying to block the enemy
               cars from shooting the puck into its goal. The strategy seemed to work, but after some
               analysis, we found out that having both of our players on the offensive for the entire
               game led to the number of goals our team scored being much higher. We attempted to optimize
               the goalie strategy a little bit more before completely disregarding it by trying different
               karts for both positions. Surprisingly, having the larger Kart, Wilber, still seemed to
               outperform strategies with a mix of kart types, but the combination of Wilber as goalie and
               Tux as the offensive player was close. Because of these findings, we ditched the one-goalie
               strategy for the double offense one. Some additional things that we experimented with were
               using parameter search for the various player hyperparameters like target speed and drift
               threshold. This ended up giving us pretty suboptimal results, so we switched to manually
               tuning the values until we were satisfied with the performance. Something else that we tried
               was calculating the distance between a player and the puck by analyzing the size of the
               puck on the screen; the closer the puck, the larger the number of pixels it was. We did this
               by using the rectangular nature of the puck to make a bounding box with the maximum and
               minimum dimensions of the puck. This turned out to not be super useful, so we scrapped it in
               our final implementation.
            </p>
         </div>
      )
   },
   {
      id: 1,
      title: "CNN Fruit Classifier",
      body: (
         <div>
            <p className=" mb-8 leading-relaxed text-justify">
               Exploration into CNN classification using the Keras API and fruit-360 dataset from Kaggle.
               In this project using the Tensorflow Keras API I create a series of CNN models and
               evaluated the best one on the Fruit-360 dataset from Kaggle which contains 131 fruits and vegetables to classify.
               In addition I implement the 3 best models into the pytorch framework.
               Ultimately the best model was a transfer learning model based on pretrained weights from ResNet50.
               The python notebook is located in my git repo:&nbsp;
               <a className="mr-5 underline hover:text-white" href="https://github.com/nalin29/Fruit-Classification-Project">
                  https://github.com/nalin29/Fruit-Classification-Project
               </a>
            </p>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Custom CNN Model</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               A custom model that was settled is a 4 layer convolutional network with 2 fully conntected layers.
               The leaky RELU Activation function was used and trained using dropout to regularize.
            </p>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"https://raw.githubusercontent.com/nalin29/Fruit-Classification-Project/master/Images/confusion_matrix1.png"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Confusion Matrix
                  </h1>
               </div>
            </div>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"https://github.com/nalin29/Fruit-Classification-Project/blob/master/Images/plot_data1.png?raw=true"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Loss/Accuracy per Epoch
                  </h1>
               </div>
            </div>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"https://github.com/nalin29/Fruit-Classification-Project/blob/master/Images/test_images1.png?raw=true"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Test Image Batch
                  </h1>
               </div>
            </div>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center pt-6">Transfer Model</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               Transfer Learning is done on ResNet50 pretrained on Imagenet.
               The features computed by ResNet is average pooled and passed into two fully connected layers
               where softmax layer outputs predictions.
            </p>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"https://raw.githubusercontent.com/nalin29/Fruit-Classification-Project/master/Images/confusion_matrix2.png"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Confusion Matrix
                  </h1>
               </div>
            </div>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"https://github.com/nalin29/Fruit-Classification-Project/blob/master/Images/data_plot2.png?raw=true"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Loss/Accuracy per Epoch
                  </h1>
               </div>
            </div>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"https://raw.githubusercontent.com/nalin29/Fruit-Classification-Project/master/Images/test_images2.png"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Test Image Batch
                  </h1>
               </div>
            </div>
         </div>),
   },
   {
      id: 2,
      title: "Point Cloud Stream Compression",
      body: (
         <div className="item-center">
            <p className=" mb-8 leading-relaxed text-justify">
               This was a FRI I research project done with a partner.
               The goal was to create a compression algorithim by which point cloud data
               could be compressed in real time, frame by frame, through an application run in ROS.
               The end result was a combination of lz4 and garden variety video compression techniques.
               First the point cloud data broadcast from a kinect camera is split into two channels.
               A 32 bit grayscale depth map and a 16 bit color image.
               The depthmap due to limitations could not be compressed through standard image compression.
               Thus, lz4 was adopted to compress frame by frame costructing an lz4 archive.
               For the color images opencv was simply applied with the ability to tweak codec.
               The end result was a successful compression of the point cloud where it could then be reconstructed on playack.
               To see the relevant code visit the git repo:&nbsp;
               <a className="mr-5 underline hover:text-white" href="https://github.com/nalin29/compress_point_cloud">
                  https://github.com/nalin29/compress_point_cloud
               </a>
               In addition an informal white paper may be found: <a className="mr-5 underline hover:text-white" href="/proj2/FRI_Final_Paper.pdf"> here </a>
            </p>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Technology</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               The point cloud data worked on by the labis often generated by a Kinect style device
               which generates anRGB image and a depth map in addition to a point cloud.
               We wrote a node that subscribes to the rectified RGB image anddepth map sensor data.
               The ROS Node then utilizes OpenCV’sVideoWriter  class  to  compress  the  RGB  image  using  a  userspecified  encoding  such  as  FFmpeg.
               Concurrently,  the  depthmap  is  compressed  using  LZ4  frame  compression  and  theoutput of both of these is stored locally in two separate files.Figure  1  shows  an  abstracted  visualization  of  this  process.
               We then wrote another node that accepts the two compressed files  and  generates  the  original  RGB  and  depth  frame  which is published through ROS.
               Another node then reconstructs thepoint  cloud  from  the  given  RGB  image  and  depth
               map.
               The node then broadcasts the reconstructed point cloud to a topic.This  simulates  rosbag  usage  where  the  rosbag  is  a
               recording of  selected  topics.
               Then,  when  ran,  it  publishes  the  recordeddata  to  those  same  topics  allowing  users  to  run
               simulations that  utilize  point  cloud  data.  Figure  2  shows  an  abstracted visualization of this process.
            </p>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain"
                  src={"/proj2/compression_node.png"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Figure 1
                  </h1>
               </div>
               <div className="">
                  <img
                     alt="gallery"
                     className="object-contain"
                     src={"/proj2/broadcast_node.png"}
                  />
                  <div className="p-2">
                     <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                        Figure 2
                     </h1>
                  </div>
               </div>
            </div>
            <br></br>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Results</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               The  results  of  different  encoders  on  total  RGB image compression can be seen in Table I.
               Since we used a variety of  lossy  and  lossless  encoders,  some  of  the  results  heavilyfavor  the  lossy  encoders.
               All  of  the  encoders  were  testedusing  the  same  image  stream.  File  size  represents  the  sizeof  the  compressed  video  file.
               While  we  got  the  best  resultsfrom  H.264,  its  important  to  note  that  this  is  a  lossy  codec.
               It   is   still   uncertain   whether   a   lossy   compression   has   aninadvertent  effect  on  the  usage  of  the  reconstructed  pointcloud.
               If  the  integrity  of  the  color  portion  of  the  point  cloudneeds to be maintained, a lossless encoder should be used.
               The data  suggests  that,  for  the  purposes  of  lossless  compression, FFmpeg should be utilized.
               The lossy compression algorithms feature the highest com-pression  ratio’s  by  a  substantial  margin,
               but  one  thing  to consider  is  whether  the  point  cloud  is  still  usable  for  the purpose that the original would be.
               At the time of writing, our tests on this were inconclusive. It also worth considering that the RGB  image is a relatively small
               portion  of  the  total  size of the original rosbag which means that savings here are not as significant,
               making the choice of lossy or lossless encoding only provide marginal savings.
               Table 2 shows the results of our depth map compression using LZ4.
               The other substantial part of our savings comes from compressing the depth map.
               In our tests, we achieved an average compression ratio of 4.4565, which is comparable to the FFmpeg encoder's compression ratio.
               While this isn't as drastic as the savings of lossy image compression, one thing to consider is that LZ4 is a lossless compression algorithm.
               Although, other lossless compression algorithms can achieve better compression ratios LZ4 is unique
               in that it has a low compression and decompression time which is important for being able to hit refresh rate targets.
               Further works can investigate other compatible compression algorithms for more saving or to support higher frame rates.
               Tables 3 and 4 show our aggregate results when considering FFmpeg and H.264 for RGB image compression and LZ4 for depth map compression,
               respectively. The original file size is the size of just the original point cloud data from the rosbag and the compressed size is the aggregate
               of data needed to reconstruct the point cloud. Compression ratio is calculated as before. This data shows that using a lossy RGB encoder, specifically H.264,
               we were able to achieve a 25-33 compression ratio which is a substantial decrease in required file size as a 6GB file now only required 192.8 MB.
               We hypothesize that this could scale up with larger data files providing even greater space efficiency.
               A lossless encoder only achieves a 14-19 compression ratio which is much lower than lossy compression.
               However, compared to the original file size, there is still substantial space savings as a 6GB file can be compressed into a 333 MB file.
            </p>
            <div className="place-items-center">
               <img
                  alt="gallery"
                  className="object-cover object-fill mx-auto"
                  src={"/proj2/table_1.jpg"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Table 1
                  </h1>
               </div>
               <div className="">
                  <img
                     alt="gallery"
                     className="object-cover mx-auto"
                     src={"/proj2/table_2.jpg"}
                  />
                  <div className="p-2">
                     <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                        Table 2
                     </h1>
                  </div>
               </div>
               <div className="">
                  <img
                     alt="gallery"
                     className="object-cover mx-auto"
                     src={"/proj2/table_3and4.jpg"}
                  />
                  <div className="p-2">
                     <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                        Table 3 and 4
                     </h1>
                  </div>
               </div>
            </div>
         </div>
      )
   },
   {
      id: 3,
      title: "Stroke Database Classification",
      body:
         (
            <div className="w-full flex-auto text-sm align-left whitespace-pre bg-white text-black pr-6">
               <JupyterViewer rawIpynb={projectNotebook} />
            </div>
         ),
   },
   {
      id: 4,
      title: "Previous Website",
      body:
         (
            <div>
               <p className=" mb-8 leading-relaxed text-justify">
                  In order to learn more about web development and boost my online presence
                  I have created this website from scratch. The website itself uses an html
                  template that was provided copywrite free from HTML5UP which has then been
                  converted to pugjs by me and then the CSS design has been tweaked slightly.
                  The website uses nodejs as a web server and serves content using an express
                  middleware. The website is dynamically rendered using pugjs. In addition the
                  contact system below uses the nodemailer library to send e-mails and
                  Send-Grid is the email service provider.
                  Interested take a look at my repository:&nbsp;
                  <a className="mr-5 underline hover:text-white" href="https://github.com/nalin29/website">
                     https://github.com/nalin29/website
                  </a>
               </p>
               <br></br>
               <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Hosting</h1>
               <p className=" mb-8 leading-relaxed text-justify">
                  The website is currently hosting through the Google Cloud Platform.
                  This website is run as a compute engine instance as part of an instance group.
                  This instance group can be accessed through an https load balancer that will intercept
                  ssl traffic and create an internal route to the instances while balancing the load on each instance.
                  An http load balancer re-routes http requests to https.
                  On the instance itself an nginx reverse proxy is utilized to direct traffic to the appropiate port.
               </p>
               <div className="">
                  <img
                     alt="gallery"
                     className="object-contain mx-auto"
                     src={"https://cloud.google.com/load-balancing/images/ilb-l7-tiers.svg"}
                  />
                  <div className="p-2">
                     <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                        Example of GCP Setup
                     </h1>
                  </div>
               </div>
            </div>
         ),
   },
   {
      id: 5,
      title: "VR Hallway Experiment",
      body: (
         <div >
            <p className=" mb-8 leading-relaxed text-justify">
               This an ongoing research project conducted by the BWI lab at UT.
               The goal of this experiment is to follow up on the results of a previous project
               that identified gaze as one of the earliest and most accurate indicators of where a person might move.
               The goal of this experiment is to identify and log the gaze cues when two people pass each other.
               Then using this data extrapolate gaze correlation with movement and if possible try to train
               a virtual agent such that it can read the gaze cues of a person in the VR environment and
               clone the behavior of a normal human.
            </p>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Technology</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               The VR environment is built in UNITY.
               An HTC-VIVE is used as the primary vr set due to its integrated gaze tracking.
               The environment consists of a rigged model that uses the Sranipal Framework to move
               the eye models to the appropiate location given the gaze of a human.
               Then to provide full body Motion a full body solver provided throught the Final IK
               package is used since it provides an accurate represnetation of real life movements.
            </p>
            <div className="">
               <img
                  alt="gallery"
                  className="object-contain mx-auto"
                  src={"/vr.gif"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Full Body Tracking Demo
                  </h1>
               </div>
            </div>
         </div>
      )
   },
   {
      id: 6,
      title: "NBAToday Website PoC",
      body: (
         <div>
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Introduction</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               NBA fans want current information about games, teams, and players in a cohesive,
               concise, and friendly manner. But acquiring such information is often easier
               said than done. Hence, we are creating NBAToday, a user-friendly web application
               with a responsive design that presents a rich assortment of information over games,
               teams, and players in the NBA. In addition, we provide live news to let our users
               know of what's happening in the world of NBA right as they access the site. Through
               NBAToday, we aim to provide some of the most desired information to fans so they can
               better engage with the sport. See the repository at:&nbsp;
               <a className="mr-5 underline hover:text-white" href="https://gitlab.com/mmishra14/cs373-idb">
                  https://gitlab.com/mmishra14/cs373-idb
               </a>
            </p>
            <div className="p-4">
               <img
                  alt="gallery"
                  className="object-contain mx-auto"
                  src={"/nba.png"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Home Page
                  </h1>
               </div>
            </div>
            <br />
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">API Design</h1>
            <p className=" mb-8 leading-relaxed text-justify">
               Our RESTful API is designed to aggregate and forward data from each of our three source APIs (see Tools > Backend below) to the frontend in a way that best reflects the structure of the site.
               For the pages that require varying levels of detail about each pillar instance (of games, teams, or players), we specify endpoints that return all attributes for one or more instances.
               For pagination, we specify endpoints that return a requested "page" of instances, and additionally we allow the request to specify the size of each page for added flexibility. To the same end, we allow
               requests to instance endpoints to specify an attribute by which to sort the data, and a direction (ascending or descending) for this sorting; this is necessary because pagination limits the frontend to a single page of instance data at a time, and so the frontend would otherwise only be able to sort some limited number of the instances. The frontend will have little to no data processing or reformatting to do.
               The endpoints with the path variable :id get a single instance with that ID. The IDs are internally defined nonnegative integers, and they are not guaranteed to be contiguous or in any particular order. These endpoints also have no URL query parameters for sorting or pagination. The endpoints with no :id path variable will request multiple instances according to the sorting and pagination URL query parameters specified.
               Successful requests are met with status code 200. Bad requests are met with status code 400. There are no silent failures. Bad requests are any and all that include invalid paths, parameter keys, or parameter values.
               Detailed descriptions are given below:
            </p>
            <h2 className="title-font text-lg font-small text-white mb-7 text-center">GET /api/players</h2>
            <p>
               This api call returns a multitude of player objects. The response will be made up of a JSON body that contains a list of player objects. Note that this api call supports query parameters. The specifiable query parameters control the page number and page size as well as support filtering and sorting by specific player attributes.
            </p>
            <br />
            <h2 className="title-font text-lg font-small text-white mb-7 text-center">GET /api/teams</h2>
            <p>
               This api call returns a multitude of team objects. The response will be made up of a JSON body that contains a list of team objects. Note that this api call supports query parameters. The specifiable query parameters control the page number and page size as well as support filtering and sorting by specific team attributes.
            </p>
            <br />
            <h2 className="title-font text-lg font-small text-white mb-7 text-center">GET /api/games</h2>
            <p>
               This api call returns a multitude of game objects. The response will be made up of a JSON body that contains a list of game objects. Note that this api call supports query parameters. The specifiable query parameters control the page number and page size as well as support filtering and sorting by specific game attributes.
            </p>
            <br />
            <h2 className="title-font text-lg font-small text-white mb-7 text-center">Searching</h2>
            <p>
               Searching can also be utilized on each pillar type (Teams, Players, Games), through a query parameter. Searching looks for matching strings within each model, as well as some of the relationships to see if a match is found. For instance, Players have team names shown but not stored in the database. Instead we access the relationship and search if the name of the team contains a query word. The only non-searchable relationship is the games fields for players and teams. This was done to primarily target search results, as searching for a team name in the player pillar, for instance, would result in all players showing up as almost all players have played against all other teams. Searching is done by executing two search types when interacting with a multi-word query: AND as well as OR search. The order of words and capitalization is not taken into account. In addition searching includes non-string fields.
            </p>
            <br />
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Frontend</h1>
            <p>
               From the perspective of the UI, we took a simple page-based approach in the frontend to display information, where each page would display a different set of information. As a result, the user can access the following pages: Home, Players, Games, Team, APIs and Sources, and About Us. From the perspective of coding, we took a component-based approach. Firstly, this approach was taken largely because of the fact that ReactJs itself is a component-based language. Furthermore, taking the component based approach enabled us to develop the frontend in a modularized fashion, which sped up development and also allowed common components to be reused, thus reducing code complexity and redundancy (a common issue found in classic HTML-based approaches).
               Coming to the stylistic choices taken for our UI, in our homepage, we decided to separate features of our website into two separate Navigation Toolbars (Navbar). The Navbar on the left side of the home page contains links to the Home, Players, Teams, and Games. For the top Navbar, we have links to the APIs and Sources and the About page. The reason we decided to have more than one Navigation Toolbar is that we wanted to keep the functionality of the website distinct from the more general information about the project and its group members. That way, users can completely focus on exploring NBAToday.
               In addition, the homepage also features a section that covers the latest news regarding the NBA, a list containing upcoming matches, and a compilation of featured NBA players. The homepage serves as a simple hub that contains all of the most important information that users can quickly look at and more detailed data and statistics can be pulled up through the links if the user decides to do so. Both the latest news and upcoming games sections of the homepage are created using text formatting and hyperlinking. The Carousel component was the most appropriate way for displaying multiple players because it allowed us to show images of different players and would auto-scroll to other players after a short period of time. In addition, the Carousel allows for users to manually look through the featured players by clicking on the arrows located to the left and right of the pictures.
               In the Players and Teams pages, we decided to use a grid (refer to Tools > Frontend below) of Cards (a react-bootstrap component). We decided to use the Card component to display information regarding the players and teams because it is the modern approach for displaying information regarding people and organizations. Furthermore, the the "More Info" button on the Card gave us a simple and elegant way to indicate to the user about how to access more information regarding a player or a team.
               In the Games page, we displayed the information about games using a table instead of cards. We took the classic table approach because it enabled us to condense the rich information about a Game into an elegant style, and overall present the rich information regarding games in a concise, organized, and eye-appealing manner to the end user. To hint to the user that more information regarding a game can be accessed about a game, we ensured that each row (containing information about a specific game) was highlighted while being hovered over.
               For the instance pages of Players, Games, and Teams, we adopted a media-first approach. By this, we mean that we ensured that we would display some sort of media along with the required attributes right as any instance page loaded. The overall organization of each instance page was arbitrary, with the goal of being eye-appealing and user friendly in mind; and responsiveness of these pages was once again supported through a grid layout (refer to Tools > Frontend below).
               APIs and Sources and About Us pages also used a Card-based approach to organize and display their information for the same reasons as outlined above, and their responsiveness was once again enabled through the grid layout.
               For the Provider Visualizations page, we simply rendered a bar graph and doughnut graph beneath each other. The bar graph provides details about the number of books by page count. The doughnut graph provides details about the number of books by alphabet. We chose these two types of graphs because they are visually appealing while being informative; and we rendered the graphs on top of one another to provide a more visually-appealing UI to the user.
               For the global search page, we logically split the page into 3 horizontal sections, where each section would display the search results for Players, Teams, and Games, in that order. We implemented this specific order because both Players and Teams use Cards to present their information, while Games uses a table. To avoid conflicts in presentation style, we chose to display Games at the bottom. At the bottom of the page, we have a pagination bar that enables the user to go through the different search results for global search. We chose to not have a pagination bar per pillar to reduce the clutter on the screen. As a result of only one pagination bar, we also include basic filtering options, where the user is able to filter by Players, Teams, and Games to further narrow their search.
            </p>
            <br />
            <p>
               From the perspective of the UI, we took a simple page-based approach in the frontend to display information, where each page would display a different set of information. As a result, the user can access the following pages: Home, Players, Games, Team, APIs and Sources, and About Us. From the perspective of coding, we took a component-based approach. Firstly, this approach was taken largely because of the fact that ReactJs itself is a component-based language. Furthermore, taking the component based approach enabled us to develop the frontend in a modularized fashion, which sped up development and also allowed common components to be reused, thus reducing code complexity and redundancy (a common issue found in classic HTML-based approaches).
               Coming to the stylistic choices taken for our UI, in our homepage, we decided to separate features of our website into two separate Navigation Toolbars (Navbar). The Navbar on the left side of the home page contains links to the Home, Players, Teams, and Games. For the top Navbar, we have links to the APIs and Sources and the About page. The reason we decided to have more than one Navigation Toolbar is that we wanted to keep the functionality of the website distinct from the more general information about the project and its group members. That way, users can completely focus on exploring NBAToday.
               In addition, the homepage also features a section that covers the latest news regarding the NBA, a list containing upcoming matches, and a compilation of featured NBA players. The homepage serves as a simple hub that contains all of the most important information that users can quickly look at and more detailed data and statistics can be pulled up through the links if the user decides to do so. Both the latest news and upcoming games sections of the homepage are created using text formatting and hyperlinking. The Carousel component was the most appropriate way for displaying multiple players because it allowed us to show images of different players and would auto-scroll to other players after a short period of time. In addition, the Carousel allows for users to manually look through the featured players by clicking on the arrows located to the left and right of the pictures.
               In the Players and Teams pages, we decided to use a grid (refer to Tools > Frontend below) of Cards (a react-bootstrap component). We decided to use the Card component to display information regarding the players and teams because it is the modern approach for displaying information regarding people and organizations. Furthermore, the the "More Info" button on the Card gave us a simple and elegant way to indicate to the user about how to access more information regarding a player or a team.
               In the Games page, we displayed the information about games using a table instead of cards. We took the classic table approach because it enabled us to condense the rich information about a Game into an elegant style, and overall present the rich information regarding games in a concise, organized, and eye-appealing manner to the end user. To hint to the user that more information regarding a game can be accessed about a game, we ensured that each row (containing information about a specific game) was highlighted while being hovered over.
               For the instance pages of Players, Games, and Teams, we adopted a media-first approach. By this, we mean that we ensured that we would display some sort of media along with the required attributes right as any instance page loaded. The overall organization of each instance page was arbitrary, with the goal of being eye-appealing and user friendly in mind; and responsiveness of these pages was once again supported through a grid layout (refer to Tools > Frontend below).
               APIs and Sources and About Us pages also used a Card-based approach to organize and display their information for the same reasons as outlined above, and their responsiveness was once again enabled through the grid layout.
               For the Provider Visualizations page, we simply rendered a bar graph and doughnut graph beneath each other. The bar graph provides details about the number of books by page count. The doughnut graph provides details about the number of books by alphabet. We chose these two types of graphs because they are visually appealing while being informative; and we rendered the graphs on top of one another to provide a more visually-appealing UI to the user.
               For the global search page, we logically split the page into 3 horizontal sections, where each section would display the search results for Players, Teams, and Games, in that order. We implemented this specific order because both Players and Teams use Cards to present their information, while Games uses a table. To avoid conflicts in presentation style, we chose to display Games at the bottom. At the bottom of the page, we have a pagination bar that enables the user to go through the different search results for global search. We chose to not have a pagination bar per pillar to reduce the clutter on the screen. As a result of only one pagination bar, we also include basic filtering options, where the user is able to filter by Players, Teams, and Games to further narrow their search.
            </p>
            <br />
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Backend</h1>
            <p>
               The Backend is built off of the three key tools Flask, SQL-alchemy and PostgreSQL.
               Flask provides the actual routing and server for executing and managing api calls. The flask application is defined as a module (backend>app). The api calls are defined in main.py.
               Flask is useful as being in Python means it is simpler to code and beginner friendly in addition powerful python libraries can be leveraged such as its integration with SQL-alchemy.
               SQL-Alchemy is the second essential tool for the backend. SQL-Alchemy provides a fast, intuitive a powerful way to manage and interact with our PostgreSQL database. Through the ability to define models and retrieve as python objects as well as execute queries with filters applied as well as built in pagination functions.
               PostgreSQL is the database that stores and manages the data used for the website. This database type integrates well with SQL-alchemy provides a good platform for a relational database and is well documented.
            </p>
            <div className="p-4">
               <img
                  alt="gallery"
                  className="object-contain mx-auto"
                  src={"https://gitlab.com/mmishra14/cs373-idb/-/wikis/uploads/4d2e5941ae3ccd11af467ab191e3bdfa/uml.JPG"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     UML Diagram of Database Relationships
                  </h1>
               </div>
            </div>
            <br></br>
            <p>
               The current design uses three APIS: &nbsp;
               <a className="mr-5 underline hover:text-white" href="https://stats.nba.com/stats/">
                  https://stats.nba.com/stats/,
               </a>
               <a className="mr-5 underline hover:text-white" href="https://www.balldontlie.io">
                  https://www.balldontlie.io
               </a>
               and &nbsp;
               <a className="mr-5 underline hover:text-white" href="https://newsdata.io/">
                  https://newsdata.io/
               </a>
            </p>
            <br />
            <p>
               Both NBA statistics APIs operate mostly with their internal IDs for players, teams, games, and more, which sometimes makes it difficult to enumerate data and to map between the APIs. The basic approach was to start with a known list of current team IDs for stats.nba.com, find their current rosters (list of player IDs), search for these player names on balldontlie.io to obtain the player IDs for balldontlie.io, and then search for all games played in the most recent season on balldontlie.io.
               Certain statistics, namely sums and averages of various scores for players and teams, are not made directly available, but require us to perform the aggregations on the data we enumerate with the methods described in the previous paragraph.
               Data was scraped through a programmatic but lengthy sequence. First since NBA-Stats is not well documented we had to experiment and find our own endpoints. These are defined in endpoints.py. Then by running scrape.py we are able to firstly, scrape team data and note down player data. During this time a sleep period is entered to prevent us from reaching rate limits. Then in a similar fashion the players and games data is scraped and saved to players.json, teams.json, games.json. Then certain stats such as total wins are generated and then saved again to the JSON. In addition since we have two disparate sources: NBA-stats and ball don't lie we preprocess by storing and matching the different ids for player, teams and games in apidefs.py.
            </p>
            <br />
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Hosting</h1>
            <p>Deployment is done through Google App Engine. This is a service offered by GCP that provides a flexible and hassle-free way to deploy complex web applications. Google App Engine is leveraged through the use of its services model. The services model allows specific routes for different services through a 'dispatch.yaml' file. In the case of our deployment we have two services default and backend. Default simply refers to the frontend which is set up to be routed to in all cases except for backend routes.
               The backend service is specified as serving routes: */api/*. For instance: https://nbatoday.xyz/api/players.
               The frontend service is specified as serving the default route (i.e all other routes). For instance https://nbatoday.xyz.
               The backend service makes use of a PostgreSQL database. This database is hosted using Google Cloud SQL allowing Google App Engine with the correct connection URL to interact with the database.
               To deploy make use of: make deploy_stack</p>
            <br />

            <p>
               The database is deployed using Google Cloud SQL. This is setup as a PostgreSQL using the default setup. There are two databases nbatoday and test. The first database contains all the data for all the various api calls. The second database is a database that is used for the unit testing.
            </p>
            <div className="p-4">
               <img
                  alt="gallery"
                  className="object-contain mx-auto"
                  src={"https://gitlab.com/mmishra14/cs373-idb/-/wikis/uploads/1fb114077fbc225e3e2a3d4ce54f94f9/nbatoday.png"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Hosting Diagram
                  </h1>
               </div>
            </div>
            <br />
            <h1 className="title-font text-lg font-medium text-white mb-7 text-center">Domain Name</h1>
            <p>
               The current website domain: nbatoday.xyz is supplied by NameCheap Domain Name Service Provider. To link the domain to our webapplication running on Google App Engine a series of records are applied to the domain. Namely, the google txt verification record that verifies that the domain provided is controlled by the user. In addition to four A and four AAAA records that direct the domain to the required Google IP addresses as well as domain servers. Then a CNAME record is applied allowing users to access the same domain using www.nbatoday.xyz.
               Once these changes propagate the Google App Engine auto-generates and auto-renews SSL Certificates for the application. This allows for secure browsing over HTTPS with Google as the Certificate Authority.
               The rest of the interaction between users and the website is handled automatically by GCP including: load balancing, redirecting and protection.
            </p>
         </div>
      )
   },
   {
      id: 7,
      title: "Pacman Q-Learning Agent",
      body: (
         <div>
            This project was the optional extra credit for Artificial Intelligence survey course. The game is set up such that there are two sides of the map. The goal is to eat all pellets on the opponenets side of the map. Agents becomes pacman when crossing to the opponents side and Ghosts on their side. To acheive this I implemented from scratch a Q-learning agent. This agent used a variety of features that could be tweaked to estimate the value of next states. The agent was given rewards based on the number of pellets remaining, winning, eating ghosts and the distance from the closest pellet. Additionally, a negative reward was applied when losing, being eaten or being close to a ghost. Ghosts or oppponents can be directly detected when within 5 blocks. To improve this we implemented a particle filter then we could estimate the locations of the opponents using peaks. Then to choose action the pacmans would try to estimate the value of future states and using an expectimax tree with fixed finite horizon choose the best action.
            See the repository here: &nbsp;<a className="mr-5 underline hover:text-white" href="https://github.com/nalin29/AI_Contest">
               https://github.com/nalin29/AI_Contest
            </a>
            <br />
            <div className="p-4">
               <img
                  alt="gallery"
                  className="object-contain mx-auto"
                  src={"/pacman.gif"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Gameplay
                  </h1>
               </div>
            </div>
            Q-Learning was run for several hundred rounds against the provided AI and across several maps. Then hand made tweaks were made to some of the features to improve performance. The result was a fifth place finish and a decent Q-learning reinforcement agent.
         </div>
      )
   },
   {
      id: 8,
      title: "AIO File Copy",
      body: (
         <div className="w-full h-full">
            The project was a final project for the Graduate course in Advanced Operating Systems. The project implements recursive file copy by utilizing asynchronous I/O. The goal is to be able to utilize the ability to execute many writes/reads in parallel and for multiple files in parallel thus reducing time. 
            This was accomplished first by using the slower and older aio library in Glib which executes in user-space. Then we implemented the same idea using the new io_uring library which allows for zero-copy asynchrounous I/O using syscall. 
            See the repository here: &nbsp;
            <a className="mr-5 underline hover:text-white" href="https://github.com/nalin29/copy_async">
               https://github.com/nalin29/copy_async
            </a>
            <br />
            <br />
            <div className="h-screen">
               <iframe
                     src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://nalinmahajan.net/aio.pdf#toolbar=0&scrollbar=0"
                     frameBorder="0"
                     scrolling="auto"
                     height="85%"
                     width="100%"
               ></iframe>
            </div>
         </div>
      )
   },
   {
      id: 9,
      title: "Smoothed Particle Hydrodynamics",
      body: (
         <div className="w-full h-full">
            This was a final project for the Graduate Physical Simulation class. In this demo I have implemented a basic verson of SPH. 
            Fluid is represented by these particles and we calculate the necessary forces on the fluid such as pressure and gravity by
            taking a sample at each particle. We then weight the sample utilzing a kernel and then we can use the specified equation to calculate
            the forces of pressure, viscosity and gravity. Then we can apply time integraton to get the next time step
            See the repository here: &nbsp;
            <a className="mr-5 underline hover:text-white" href="https://github.com/nalin29/sph_final">
               https://github.com/nalin29/sph_final
            </a>
            <br />
            <br />
            <div className="p-4">
               <img
                  alt="gallery"
                  className="object-contain mx-auto"
                  src={"/sph.gif"}
               />
               <div className="p-2">
                  <h1 className="title-font text-lg font-small text-white mb-1 text-center">
                     Demo
                  </h1>
               </div>
            </div>
            <div className="h-screen">
               <iframe
                  src="https://drive.google.com/viewerng/viewer?embedded=true&url=https://nalinmahajan.net/sph.pdf#toolbar=0&scrollbar=0"
                  frameBorder="0"
                  scrolling="auto"
                  height="85%"
                  width="100%"
               ></iframe>
            </div>
         </div>
      )
   }
]