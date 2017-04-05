val Organization = "com.github.mrkm4ntr"
val Name = "gitbucket-network-plugin"
val Version = "1.3"

lazy val root = (project in file(".")).enablePlugins(SbtTwirl)

organization := Organization
name := Name
version := Version
scalaVersion := "2.12.1"

resolvers ++= Seq(
  Resolver.jcenterRepo
)

libraryDependencies ++= Seq(
  "io.github.gitbucket" %% "gitbucket" % "4.11.0" % "provided",
  "com.typesafe.play" %% "twirl-compiler" % "1.3.0" % "provided",
  "javax.servlet" % "javax.servlet-api" % "3.1.0" % "provided"
)

scalacOptions := Seq("-deprecation", "-feature", "-language:postfixOps")
