import React from 'react';
import './Audio.css';

export const Audio = (props) => {
    console.log(props.name);
    return(
        <div>
            <p>{props.name}</p>
            <audio><source src={props.url}></source></audio>
        </div>
    );
}

/*
now here is where some fiddling might need to take place bc i'm not all that familiar with the audio html tag
but from what I understand, we make an audio wrapper and a source tag inside it.
we're gonna have to specify the file type I thiiink ? Itunes previews are in M4A which is supportedSWAGEPICMONEYGAMERWEED
I have a feeling that the rest of our task will be fuckin with css then, and trying to get the tracklist to overlay wit
the album. probably an onHover spring with an opacity thi


1. No worries on that for now, we can always get it positioned where we want after we make it work. But I think what we'll
want it to do is be a scrollable window like you'd see when viewing code on a blog site

but to make it go off the grid we just don't specify it on the grid area, and we'll give it a different z-index
2. as for mobile, that's something i haven't been keeping too close of an eye on. but it'd be pretty easy to re-order 
the CSS for this site specifically for smaller screens. it isn't that complicated of a design to where there would be a 
lot of overhead.
also with respect to the preloader, I think I'm gonna re-work it entirely using hooks to make the nav and preloader 
into the same component. the way it is right now definitely will be changing in the final stages of everything.

Alright, so basically for the time being I should fiddle with this audio component to make sure it's actually working as intended?

yeah I would say the next steps here would be adding an icon using fontawesome to the Audio component, and then
making that icon have an onClick listener which would actually control the playing/pausing of the audio. If 
that proves to not work so well, we can just give the audio tag a 'controls' attribute which will use the browser's 
default media player (which isn't customizeable theme-wise, but it'll work and the rest of our stuff will be custom)

Is the server running rn? I wanna see how this looks atm

Lemme start it, we have an error with JSX tags in the Home.js file, lemme fix that fis

Rodger that, couple things:

1.) We have a grid, how exactly are we to make sure this track list goes where it needs to, we have it placed off to the side and I'm worried
about getting it in that exact placement because I have no clue how to position that specifically within a grid.

2.) Have you checked out our mobile view? Definitely something for later but as of right now the site isn't functional on mobile, 
our nav bar is too large to fit the space and the actual pre-loader doesn't work too great with touch controls. 
*/