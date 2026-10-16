import details from '../assets/community-spaces/event-details-hi-fi.png';
import reservation from '../assets/community-spaces/reserve-spot-hi-fi.png';
import home from '../assets/community-spaces/home-hi-fi.png';
import events from '../assets/community-spaces/events-hi-fi.png';
import confirmation from '../assets/community-spaces/confirmation-hi-fi.png';
import midEvents from '../assets/community-spaces/events-mid-fi.png';
import flow from '../assets/community-spaces/task-flow.png';
import sketch from '../assets/community-spaces/lo-fi-sketch.png';
import space from '../assets/community-spaces/space-sketches.webp';

export const communityAssets = {
  details: { image: details, alt: 'Community Spaces Event Details prototype showing a study event description, location, time, and Sign Up action over the event list.', caption: 'Event details / high fidelity. Information before choosing to sign up.', source: 'Figma · Event Details Page · 214:167' },
  reservation: { image: reservation, alt: 'Community Spaces Reserve Spot prototype showing member type, requirements, illustrative availability, and a Book action.', caption: 'Reservation / high fidelity. Member type, requirements, and sample availability before booking.', source: 'Figma · Reserve Spot Page · 214:89' },
  space: { image: space, alt: 'Original collage of Katelyn, Illiana, Boran, and Suleyman’s physical-space sketches, exploring study seating, shared event areas, a stage, market, and outdoor gathering spaces.', caption: 'Four teammates, a shared brief. Original spatial explorations preserved together as presented in class.', source: 'Final class presentation · page 10' },
  home: { image: home, alt: 'Community Spaces prototype home screen with a calendar, illustrative occupancy count, Events button, and bottom navigation.', caption: 'Home / high fidelity. All counts and names are illustrative prototype content.', source: 'Figma · Home Page · 212:109' },
  events: { image: events, alt: 'High-fidelity Community Spaces Events screen showing study, game, coffee, and movie event entries with images, dates, descriptions, and detail arrows.', caption: 'Events / high fidelity. Event details are sample interface content.', source: 'Figma · Events Page · 214:237' },
  confirmation: { image: confirmation, alt: 'Community Spaces registration confirmation concept with a checkmark and Continue Shopping, Add to Calendar, and Home Page actions.', caption: 'Confirmation / high fidelity. Next actions after event registration.', source: 'Figma · Confirmation Page · 214:4' },
  midEvents: { image: midEvents, alt: 'Grayscale mid-fidelity Events wireframe with four repeated event entries, details arrows, and circular bottom navigation icons.', caption: 'Events / mid fidelity. The earlier structural layout.', source: 'Figma · Events Page · 1:5' },
  flow: { image: flow, alt: 'Team task-flow diagram: login leads to home, events, a decision, event details, signup, double check, and confirmation; home also branches to history, market, and shopping cart.', caption: 'The team’s original event-registration task flow.', source: 'Final class presentation · page 8' },
  sketch: { image: sketch, alt: 'Hand-drawn team sketch connecting login, home, events, signup, and a confirmation decision before the end of the flow.', caption: 'An original early sketch of the digital flow.', source: 'Final class presentation · page 11' },
};
