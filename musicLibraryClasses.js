/*
Classes in JavaScript

Requirements
Class Library
  To construct needs a 'name' and 'creator' as strings
  Has many playlists, but starts as an empty array

Class Playlist
  Needs a name upon creation
  Playlist object can be added to an instance of a library
  A playlist can have many tracks
  Has a function overallRating
      calculates the rating by averaging the rating of its tracks
  Has a function totalDuration
      will sum the duration of all its tracks

Class Track
  On creation require:
    a title, a rating (integer from 1-5), length (integer in seconds)

Once defined, your we can use 'new' to instantiate these functions to create instances of
 Library and then add new Tracks and Playlists to the Library.

*/

class Library {

  constructor(name, creator) {
    this.name = name
    this.creator = creator
    this.playlist = []
  }
}

class Playlist {

  constructor(name) {
    this.name = name
    this.tracks = []
  }

  overallRating() {
    if (this.tracks.length > 0) {
      let tracks = this.tracks
      let rating = 0
      for (let i in tracks) {
        rating += tracks[i].rating
      }
      return (Math.round((rating / tracks.length)* 100) / 100)

      } else {
      return "No Tracks to Rate"
    }
  }

  totalDuration() {
    if (this.tracks.length > 0) {
      let tracks = this.tracks
      let duration = 0
      for (let i in tracks) {
        duration += tracks[i].length
      }
      return duration

      } else {
      return "No tracks added, duration is 0"
    }
  }
}


class Track {

  constructor(artist, title, rating, length) {
    this.artist = artist
    this.title = title
    this.rating = rating
    this.length = length
  }
}

// Use 'new' to create new instances
let rapLibrary = new Library('Rap Battle', 'Simon')

let eminemPlaylist = new Playlist('Eminem')
let _90sPlaylist = new Playlist("90's rap")
let emptyPlaylist = new Playlist('Empty Playlist')

let track1 = new Track('Eminem', 'Rabbit Run', 5, 145)
let track2 = new Track('Eminem', 'Toy Soldiers', 4, 190)
let track3 = new Track('Eminem', 'Revival', 3, 120)
let track4 = new Track('Jay Z', 'Hard Knock Life', 3, 185)
let track5 = new Track('Wu-Tang Clan', 'CREAM', 5, 200)
let track6 = new Track('Will Smith', 'Miami', 1, 110)


// add Playlists to Library and Tracks to Playlists
rapLibrary.playlist.push(eminemPlaylist)
rapLibrary.playlist.push(_90sPlaylist)

eminemPlaylist.tracks.push(track1)
eminemPlaylist.tracks.push(track2)
eminemPlaylist.tracks.push(track3)
_90sPlaylist.tracks.push(track4)
_90sPlaylist.tracks.push(track5)
_90sPlaylist.tracks.push(track6)

// To view a sample of the outcome remove the comments below and run this file

// console.log("The Library:", rapLibrary)
// console.log("Eminem Playlist:", eminemPlaylist)
// console.log("90s Playlist Rating:", _90sPlaylist.overallRating())
// console.log("Eminem Playlist Duration:", eminemPlaylist.totalDuration())
// console.log("Empty Playlist Rating:", emptyPlaylist.overallRating())



















