<?php 
$title = "JP Boneyard Design: Graphic Design, Screen Printing &amp; DIY Shows";
include($_SERVER["DOCUMENT_ROOT"]."/_includes/page-start.php"); ?>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
<!-- Page Begins				-->
<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<body>

	<div id="container">

		<?php include($_SERVER["DOCUMENT_ROOT"]."/_includes/header.php"); ?>

		<div id="main" role="main">
			<a href="/nationalposterretrospecticus" display="block"><div class="feat-project-mod" id="top">
				<img class="home-topper" src="_img/home-topper-3.jpg" />
		</div></a> <!-- /feat-project-mod -->

			<div class="home-intro">
				<h1 class="nav-title">JP Boneyard</h1>
				<h2><a href="/nationalposterretrospecticus">The National Poster Retrospecticus</a></h2>
				<div class="intro-overline">Featured Project</div>
				<!-- <h2>Consumate Craftsman & Haver of Fun</h2>
				<div class="intro-overline">Design, Code, Art & Music Events</div> -->
 				<!-- <p>JP Boneyard designs and codes websites, loves hand-printing posters and setting up art and music events that bring people together.</p> -->
			</div> <!-- /home-intro -->	

			<div class="home-tiles">
				<?php include($_SERVER["DOCUMENT_ROOT"]."/_includes/project-tiles.php"); ?>
			</div>	
			
		</div> <!-- /main -->

		<!-- footer -->
		<?php include($_SERVER["DOCUMENT_ROOT"]."/_includes/footer.php"); ?>

	</div> <!-- eo #container -->

	<!-- Page End -->
	<?php include($_SERVER["DOCUMENT_ROOT"]."/_includes/page-end.php"); ?>
