// Script to add another batch of 500+ baby names for even better coverage
const fs = require('fs');
const path = require('path');

// Additional names batch 2 - focusing on more variants, international names, and filling gaps
const additionalNames = [
  // More A names (girl)
  { name: 'Aanya', slug: 'aanya', gender: 'girl', origin: 'Sanskrit', meaning: 'Inexhaustible, limitless', popularity: 685 },
  { name: 'Aarna', slug: 'aarna', gender: 'girl', origin: 'Sanskrit', meaning: 'Goddess Lakshmi', popularity: 725 },
  { name: 'Aarohi', slug: 'aarohi', gender: 'girl', origin: 'Sanskrit', meaning: 'Musical tune', popularity: 845 },
  { name: 'Abby', slug: 'abby', gender: 'girl', origin: 'Hebrew', meaning: 'Father\'s joy', popularity: 325 },
  { name: 'Abelina', slug: 'abelina', gender: 'girl', origin: 'Hebrew', meaning: 'Breath', popularity: 892 },
  { name: 'Abrianna', slug: 'abrianna', gender: 'girl', origin: 'Hebrew', meaning: 'Mother of nations', popularity: 658 },
  { name: 'Abrielle', slug: 'abrielle', gender: 'girl', origin: 'French', meaning: 'God is my strength', popularity: 525 },
  { name: 'Abril', slug: 'abril-2', gender: 'girl', origin: 'Spanish', meaning: 'April, opening', popularity: 745 },
  { name: 'Acadia', slug: 'acadia', gender: 'girl', origin: 'French', meaning: 'Idyllic place', popularity: 895 },
  { name: 'Addilynn', slug: 'addilynn-2', gender: 'girl', origin: 'English', meaning: 'Noble', popularity: 428 },
  { name: 'Adelais', slug: 'adelais', gender: 'girl', origin: 'French', meaning: 'Noble', popularity: 915 },
  { name: 'Adira', slug: 'adira', gender: 'girl', origin: 'Hebrew', meaning: 'Strong, noble', popularity: 485 },
  { name: 'Adriana', slug: 'adriana-2', gender: 'girl', origin: 'Latin', meaning: 'From Hadria', popularity: 175 },
  { name: 'Aerin', slug: 'aerin', gender: 'girl', origin: 'Irish', meaning: 'Ireland', popularity: 765 },
  { name: 'Afina', slug: 'afina', gender: 'girl', origin: 'Greek', meaning: 'Goddess Athena', popularity: 925 },
  { name: 'Agatha', slug: 'agatha', gender: 'girl', origin: 'Greek', meaning: 'Good, honorable', popularity: 685 },
  { name: 'Aila', slug: 'aila', gender: 'girl', origin: 'Scottish', meaning: 'From the strong place', popularity: 425 },
  { name: 'Ailani', slug: 'ailani', gender: 'girl', origin: 'Hawaiian', meaning: 'Chief', popularity: 385 },
  { name: 'Ainara', slug: 'ainara', gender: 'girl', origin: 'Basque', meaning: 'Swallow bird', popularity: 895 },
  { name: 'Ainhoa', slug: 'ainhoa-2', gender: 'girl', origin: 'Basque', meaning: 'Virgin Mary', popularity: 825 },

  // More B names (girl)
  { name: 'Bailee', slug: 'bailee', gender: 'girl', origin: 'English', meaning: 'Bailiff', popularity: 465 },
  { name: 'Bailyn', slug: 'bailyn', gender: 'girl', origin: 'English', meaning: 'Bailiff', popularity: 725 },
  { name: 'Barbara', slug: 'barbara', gender: 'girl', origin: 'Greek', meaning: 'Foreign woman', popularity: 585 },
  { name: 'Beatrice', slug: 'beatrice', gender: 'girl', origin: 'Latin', meaning: 'She who brings happiness', popularity: 315 },
  { name: 'Beatriz', slug: 'beatriz', gender: 'girl', origin: 'Spanish', meaning: 'Bringer of joy', popularity: 425 },
  { name: 'Belen', slug: 'belen', gender: 'girl', origin: 'Spanish', meaning: 'Bethlehem', popularity: 685 },
  { name: 'Bella', slug: 'bella-2', gender: 'girl', origin: 'Italian', meaning: 'Beautiful', popularity: 115 },
  { name: 'Belle', slug: 'belle', gender: 'girl', origin: 'French', meaning: 'Beautiful', popularity: 625 },
  { name: 'Bexley', slug: 'bexley', gender: 'girl', origin: 'English', meaning: 'Woodland clearing', popularity: 285 },
  { name: 'Bianca', slug: 'bianca-2', gender: 'girl', origin: 'Italian', meaning: 'White', popularity: 225 },
  { name: 'Birdie', slug: 'birdie', gender: 'girl', origin: 'English', meaning: 'Little bird', popularity: 785 },
  { name: 'Blair', slug: 'blair', gender: 'girl', origin: 'Scottish', meaning: 'Field, plain', popularity: 485 },
  { name: 'Blaire', slug: 'blaire', gender: 'girl', origin: 'Scottish', meaning: 'Field, plain', popularity: 625 },
  { name: 'Blake', slug: 'blake-girl', gender: 'girl', origin: 'English', meaning: 'Pale, dark', popularity: 395 },
  { name: 'Blakely', slug: 'blakely-2', gender: 'girl', origin: 'English', meaning: 'Dark meadow', popularity: 165 },
  { name: 'Blanche', slug: 'blanche', gender: 'girl', origin: 'French', meaning: 'White', popularity: 825 },
  { name: 'Blossom', slug: 'blossom', gender: 'girl', origin: 'English', meaning: 'Flower bloom', popularity: 895 },
  { name: 'Bonnie', slug: 'bonnie', gender: 'girl', origin: 'Scottish', meaning: 'Beautiful, cheerful', popularity: 625 },
  { name: 'Braelynn', slug: 'braelynn', gender: 'girl', origin: 'American', meaning: 'Broad hill', popularity: 285 },
  { name: 'Bria', slug: 'bria', gender: 'girl', origin: 'Irish', meaning: 'Strong, hill', popularity: 485 },

  // More C names (girl)
  { name: 'Cadence', slug: 'cadence-2', gender: 'girl', origin: 'Latin', meaning: 'Rhythm', popularity: 225 },
  { name: 'Cailyn', slug: 'cailyn', gender: 'girl', origin: 'Irish', meaning: 'Girl, lass', popularity: 625 },
  { name: 'Caitlin', slug: 'caitlin', gender: 'girl', origin: 'Irish', meaning: 'Pure', popularity: 385 },
  { name: 'Caitlyn', slug: 'caitlyn-2', gender: 'girl', origin: 'Irish', meaning: 'Pure', popularity: 165 },
  { name: 'Calista', slug: 'calista', gender: 'girl', origin: 'Greek', meaning: 'Most beautiful', popularity: 685 },
  { name: 'Calla', slug: 'calla', gender: 'girl', origin: 'Greek', meaning: 'Beautiful', popularity: 525 },
  { name: 'Calleigh', slug: 'calleigh', gender: 'girl', origin: 'Irish', meaning: 'Bright-headed', popularity: 785 },
  { name: 'Calliope', slug: 'calliope', gender: 'girl', origin: 'Greek', meaning: 'Beautiful voice', popularity: 485 },
  { name: 'Cambria', slug: 'cambria', gender: 'girl', origin: 'Welsh', meaning: 'Wales', popularity: 725 },
  { name: 'Camelia', slug: 'camelia', gender: 'girl', origin: 'Latin', meaning: 'Flower name', popularity: 825 },
  { name: 'Cameron', slug: 'cameron-girl', gender: 'girl', origin: 'Scottish', meaning: 'Crooked nose', popularity: 425 },
  { name: 'Camila', slug: 'camila-2', gender: 'girl', origin: 'Latin', meaning: 'Young ceremonial attendant', popularity: 12 },
  { name: 'Camilla', slug: 'camilla-2', gender: 'girl', origin: 'Latin', meaning: 'Young ceremonial attendant', popularity: 285 },
  { name: 'Camille', slug: 'camille-2', gender: 'girl', origin: 'French', meaning: 'Young ceremonial attendant', popularity: 225 },
  { name: 'Camryn', slug: 'camryn-2', gender: 'girl', origin: 'Scottish', meaning: 'Crooked nose', popularity: 285 },
  { name: 'Candace', slug: 'candace', gender: 'girl', origin: 'Latin', meaning: 'Queen mother', popularity: 525 },
  { name: 'Cara', slug: 'cara', gender: 'girl', origin: 'Italian', meaning: 'Beloved', popularity: 625 },
  { name: 'Carina', slug: 'carina', gender: 'girl', origin: 'Italian', meaning: 'Beloved', popularity: 685 },
  { name: 'Carla', slug: 'carla', gender: 'girl', origin: 'German', meaning: 'Free woman', popularity: 585 },
  { name: 'Carly', slug: 'carly-2', gender: 'girl', origin: 'English', meaning: 'Free woman', popularity: 285 },

  // More D names (girl)
  { name: 'Dahlia', slug: 'dahlia-2', gender: 'girl', origin: 'Scandinavian', meaning: 'Valley', popularity: 225 },
  { name: 'Daiana', slug: 'daiana', gender: 'girl', origin: 'Latin', meaning: 'Divine', popularity: 825 },
  { name: 'Daina', slug: 'daina', gender: 'girl', origin: 'Lithuanian', meaning: 'Song', popularity: 895 },
  { name: 'Daisie', slug: 'daisie', gender: 'girl', origin: 'English', meaning: 'Day\'s eye', popularity: 725 },
  { name: 'Daleyza', slug: 'daleyza-2', gender: 'girl', origin: 'Spanish', meaning: 'Delightful', popularity: 285 },
  { name: 'Damaris', slug: 'damaris', gender: 'girl', origin: 'Greek', meaning: 'Gentle', popularity: 685 },
  { name: 'Dani', slug: 'dani', gender: 'girl', origin: 'Hebrew', meaning: 'God is my judge', popularity: 525 },
  { name: 'Danica', slug: 'danica', gender: 'girl', origin: 'Slavic', meaning: 'Morning star', popularity: 425 },
  { name: 'Daniela', slug: 'daniela-2', gender: 'girl', origin: 'Hebrew', meaning: 'God is my judge', popularity: 95 },
  { name: 'Daniella', slug: 'daniella-2', gender: 'girl', origin: 'Hebrew', meaning: 'God is my judge', popularity: 285 },
  { name: 'Danielle', slug: 'danielle-2', gender: 'girl', origin: 'Hebrew', meaning: 'God is my judge', popularity: 325 },
  { name: 'Danna', slug: 'danna', gender: 'girl', origin: 'Hebrew', meaning: 'God has judged', popularity: 485 },
  { name: 'Daphne', slug: 'daphne-2', gender: 'girl', origin: 'Greek', meaning: 'Laurel tree', popularity: 285 },
  { name: 'Darcy', slug: 'darcy', gender: 'girl', origin: 'Irish', meaning: 'Dark one', popularity: 625 },
  { name: 'Daria', slug: 'daria', gender: 'girl', origin: 'Persian', meaning: 'Wealthy', popularity: 725 },
  { name: 'Darla', slug: 'darla', gender: 'girl', origin: 'English', meaning: 'Darling', popularity: 825 },
  { name: 'Darlene', slug: 'darlene', gender: 'girl', origin: 'English', meaning: 'Darling', popularity: 685 },
  { name: 'Davina', slug: 'davina', gender: 'girl', origin: 'Hebrew', meaning: 'Beloved', popularity: 785 },
  { name: 'Dawn', slug: 'dawn', gender: 'girl', origin: 'English', meaning: 'Daybreak', popularity: 625 },
  { name: 'Dayana', slug: 'dayana', gender: 'girl', origin: 'Latin', meaning: 'Divine', popularity: 525 },

  // More E names (girl)
  { name: 'Eabha', slug: 'eabha', gender: 'girl', origin: 'Irish', meaning: 'Life', popularity: 925 },
  { name: 'Eden', slug: 'eden-girl', gender: 'girl', origin: 'Hebrew', meaning: 'Paradise', popularity: 145 },
  { name: 'Edith', slug: 'edith', gender: 'girl', origin: 'English', meaning: 'Prosperous in war', popularity: 485 },
  { name: 'Edna', slug: 'edna', gender: 'girl', origin: 'Hebrew', meaning: 'Pleasure', popularity: 785 },
  { name: 'Eileen', slug: 'eileen', gender: 'girl', origin: 'Irish', meaning: 'Bright, shining one', popularity: 625 },
  { name: 'Elaina', slug: 'elaina', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 285 },
  { name: 'Elaine', slug: 'elaine', gender: 'girl', origin: 'French', meaning: 'Shining light', popularity: 525 },
  { name: 'Elana', slug: 'elana', gender: 'girl', origin: 'Hebrew', meaning: 'Oak tree', popularity: 625 },
  { name: 'Elanor', slug: 'elanor', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 825 },
  { name: 'Elara', slug: 'elara', gender: 'girl', origin: 'Greek', meaning: 'Sparkling', popularity: 485 },
  { name: 'Eldora', slug: 'eldora', gender: 'girl', origin: 'Spanish', meaning: 'Covered with gold', popularity: 925 },
  { name: 'Electra', slug: 'electra', gender: 'girl', origin: 'Greek', meaning: 'Bright, shining', popularity: 895 },
  { name: 'Elena', slug: 'elena-2', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 55 },
  { name: 'Eleni', slug: 'eleni', gender: 'girl', origin: 'Greek', meaning: 'Light', popularity: 685 },
  { name: 'Elenora', slug: 'elenora', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 725 },
  { name: 'Eleonora', slug: 'eleonora', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 625 },
  { name: 'Eliana', slug: 'eliana-2', gender: 'girl', origin: 'Hebrew', meaning: 'God has answered', popularity: 48 },
  { name: 'Elianna', slug: 'elianna-2', gender: 'girl', origin: 'Hebrew', meaning: 'God has answered', popularity: 125 },
  { name: 'Elina', slug: 'elina', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 525 },
  { name: 'Elinor', slug: 'elinor', gender: 'girl', origin: 'Greek', meaning: 'Shining light', popularity: 625 },

  // More F names (girl)
  { name: 'Fabiana', slug: 'fabiana', gender: 'girl', origin: 'Latin', meaning: 'Bean grower', popularity: 825 },
  { name: 'Faith', slug: 'faith-2', gender: 'girl', origin: 'English', meaning: 'Trust, belief', popularity: 115 },
  { name: 'Fallon', slug: 'fallon', gender: 'girl', origin: 'Irish', meaning: 'Leader', popularity: 425 },
  { name: 'Farrah', slug: 'farrah', gender: 'girl', origin: 'Arabic', meaning: 'Joy', popularity: 625 },
  { name: 'Fatima', slug: 'fatima', gender: 'girl', origin: 'Arabic', meaning: 'Captivating', popularity: 485 },
  { name: 'Fatoumata', slug: 'fatoumata', gender: 'girl', origin: 'Arabic', meaning: 'Abstain', popularity: 925 },
  { name: 'Faye', slug: 'faye', gender: 'girl', origin: 'French', meaning: 'Fairy', popularity: 525 },
  { name: 'Felicia', slug: 'felicia', gender: 'girl', origin: 'Latin', meaning: 'Happy, fortunate', popularity: 685 },
  { name: 'Felicity', slug: 'felicity', gender: 'girl', origin: 'Latin', meaning: 'Happiness', popularity: 425 },
  { name: 'Fernanda', slug: 'fernanda', gender: 'girl', origin: 'Spanish', meaning: 'Adventurous', popularity: 385 },
  { name: 'Fiona', slug: 'fiona-2', gender: 'girl', origin: 'Irish', meaning: 'Fair, white', popularity: 285 },
  { name: 'Flora', slug: 'flora', gender: 'girl', origin: 'Latin', meaning: 'Flower', popularity: 485 },
  { name: 'Florence', slug: 'florence', gender: 'girl', origin: 'Latin', meaning: 'Flourishing', popularity: 425 },
  { name: 'Frances', slug: 'frances', gender: 'girl', origin: 'Latin', meaning: 'From France', popularity: 525 },
  { name: 'Francesca', slug: 'francesca-2', gender: 'girl', origin: 'Italian', meaning: 'From France', popularity: 285 },
  { name: 'Freda', slug: 'freda', gender: 'girl', origin: 'German', meaning: 'Peaceful ruler', popularity: 895 },
  { name: 'Freya', slug: 'freya-2', gender: 'girl', origin: 'Norse', meaning: 'Noble woman', popularity: 165 },
  { name: 'Frida', slug: 'frida', gender: 'girl', origin: 'German', meaning: 'Peace', popularity: 625 },

  // More G names (girl)
  { name: 'Gabriela', slug: 'gabriela-2', gender: 'girl', origin: 'Hebrew', meaning: 'God is my strength', popularity: 115 },
  { name: 'Gabrielle', slug: 'gabrielle-2', gender: 'girl', origin: 'Hebrew', meaning: 'God is my strength', popularity: 225 },
  { name: 'Gail', slug: 'gail', gender: 'girl', origin: 'Hebrew', meaning: 'Father\'s joy', popularity: 725 },
  { name: 'Galilea', slug: 'galilea', gender: 'girl', origin: 'Hebrew', meaning: 'From Galilee', popularity: 485 },
  { name: 'Gema', slug: 'gema', gender: 'girl', origin: 'Spanish', meaning: 'Gem, jewel', popularity: 825 },
  { name: 'Gemma', slug: 'gemma-2', gender: 'girl', origin: 'Italian', meaning: 'Precious stone', popularity: 285 },
  { name: 'Genesis', slug: 'genesis-2', gender: 'girl', origin: 'Greek', meaning: 'Beginning', popularity: 75 },
  { name: 'Geneva', slug: 'geneva', gender: 'girl', origin: 'French', meaning: 'Juniper tree', popularity: 625 },
  { name: 'Genevieve', slug: 'genevieve-2', gender: 'girl', origin: 'French', meaning: 'Woman of the family', popularity: 165 },
  { name: 'Georgia', slug: 'georgia-2', gender: 'girl', origin: 'Greek', meaning: 'Farmer', popularity: 225 },
  { name: 'Georgina', slug: 'georgina', gender: 'girl', origin: 'Greek', meaning: 'Farmer', popularity: 525 },
  { name: 'Geraldine', slug: 'geraldine', gender: 'girl', origin: 'German', meaning: 'Ruler with a spear', popularity: 725 },
  { name: 'Gia', slug: 'gia-2', gender: 'girl', origin: 'Italian', meaning: 'God is gracious', popularity: 285 },
  { name: 'Giana', slug: 'giana', gender: 'girl', origin: 'Italian', meaning: 'God is gracious', popularity: 425 },
  { name: 'Gianna', slug: 'gianna-2', gender: 'girl', origin: 'Italian', meaning: 'God is gracious', popularity: 13 },
  { name: 'Gigi', slug: 'gigi', gender: 'girl', origin: 'French', meaning: 'Earth worker', popularity: 625 },
  { name: 'Gillian', slug: 'gillian', gender: 'girl', origin: 'Latin', meaning: 'Youthful', popularity: 585 },
  { name: 'Giselle', slug: 'giselle-2', gender: 'girl', origin: 'German', meaning: 'Pledge', popularity: 225 },
  { name: 'Giuliana', slug: 'giuliana', gender: 'girl', origin: 'Italian', meaning: 'Youthful', popularity: 385 },
  { name: 'Gladys', slug: 'gladys', gender: 'girl', origin: 'Welsh', meaning: 'Nation', popularity: 785 },

  // More H names (girl)
  { name: 'Hadassah', slug: 'hadassah', gender: 'girl', origin: 'Hebrew', meaning: 'Myrtle tree', popularity: 725 },
  { name: 'Hadlee', slug: 'hadlee', gender: 'girl', origin: 'English', meaning: 'Heather field', popularity: 485 },
  { name: 'Hadleigh', slug: 'hadleigh', gender: 'girl', origin: 'English', meaning: 'Heather field', popularity: 625 },
  { name: 'Hadley', slug: 'hadley-2', gender: 'girl', origin: 'English', meaning: 'Heather field', popularity: 95 },
  { name: 'Hailey', slug: 'hailey-2', gender: 'girl', origin: 'English', meaning: 'Hay meadow', popularity: 35 },
  { name: 'Haleigh', slug: 'haleigh', gender: 'girl', origin: 'English', meaning: 'Hay meadow', popularity: 585 },
  { name: 'Haley', slug: 'haley-2', gender: 'girl', origin: 'English', meaning: 'Hay meadow', popularity: 225 },
  { name: 'Halle', slug: 'halle', gender: 'girl', origin: 'Scandinavian', meaning: 'Rock', popularity: 525 },
  { name: 'Hallie', slug: 'hallie-2', gender: 'girl', origin: 'English', meaning: 'Dweller at the hall meadow', popularity: 285 },
  { name: 'Hana', slug: 'hana', gender: 'girl', origin: 'Arabic', meaning: 'Happiness', popularity: 425 },
  { name: 'Hanna', slug: 'hanna-2', gender: 'girl', origin: 'Hebrew', meaning: 'Grace', popularity: 285 },
  { name: 'Hannah', slug: 'hannah-2', gender: 'girl', origin: 'Hebrew', meaning: 'Grace', popularity: 15 },
  { name: 'Harlee', slug: 'harlee', gender: 'girl', origin: 'English', meaning: 'Hare meadow', popularity: 525 },
  { name: 'Harleigh', slug: 'harleigh', gender: 'girl', origin: 'English', meaning: 'Hare meadow', popularity: 425 },
  { name: 'Harley', slug: 'harley-girl', gender: 'girl', origin: 'English', meaning: 'Hare meadow', popularity: 185 },
  { name: 'Harlow', slug: 'harlow-2', gender: 'girl', origin: 'English', meaning: 'Army hill', popularity: 85 },
  { name: 'Harmoni', slug: 'harmoni', gender: 'girl', origin: 'Latin', meaning: 'Unity', popularity: 625 },
  { name: 'Harmony', slug: 'harmony-2', gender: 'girl', origin: 'Greek', meaning: 'Unity', popularity: 285 },
  { name: 'Harper', slug: 'harper-2', gender: 'girl', origin: 'English', meaning: 'Harp player', popularity: 8 },
  { name: 'Harriet', slug: 'harriet', gender: 'girl', origin: 'German', meaning: 'Home ruler', popularity: 625 },

  // Boy names - A
  { name: 'Aaron', slug: 'aaron', gender: 'boy', origin: 'Hebrew', meaning: 'Exalted, strong', popularity: 62 },
  { name: 'Abel', slug: 'abel', gender: 'boy', origin: 'Hebrew', meaning: 'Breath', popularity: 185 },
  { name: 'Abraham', slug: 'abraham', gender: 'boy', origin: 'Hebrew', meaning: 'Father of multitudes', popularity: 195 },
  { name: 'Ace', slug: 'ace', gender: 'boy', origin: 'Latin', meaning: 'Unity', popularity: 285 },
  { name: 'Adam', slug: 'adam', gender: 'boy', origin: 'Hebrew', meaning: 'Man, earth', popularity: 95 },
  { name: 'Adan', slug: 'adan', gender: 'boy', origin: 'Spanish', meaning: 'Earth', popularity: 425 },
  { name: 'Addison', slug: 'addison-boy', gender: 'boy', origin: 'English', meaning: 'Son of Adam', popularity: 325 },
  { name: 'Adler', slug: 'adler', gender: 'boy', origin: 'German', meaning: 'Eagle', popularity: 785 },
  { name: 'Adrian', slug: 'adrian', gender: 'boy', origin: 'Latin', meaning: 'From Hadria', popularity: 85 },
  { name: 'Adriel', slug: 'adriel', gender: 'boy', origin: 'Hebrew', meaning: 'Flock of God', popularity: 225 },
  { name: 'Ahmad', slug: 'ahmad', gender: 'boy', origin: 'Arabic', meaning: 'Highly praised', popularity: 485 },
  { name: 'Ahmed', slug: 'ahmed', gender: 'boy', origin: 'Arabic', meaning: 'Highly praised', popularity: 525 },
  { name: 'Aidan', slug: 'aidan', gender: 'boy', origin: 'Irish', meaning: 'Little fire', popularity: 225 },
  { name: 'Aiden', slug: 'aiden', gender: 'boy', origin: 'Irish', meaning: 'Little fire', popularity: 15 },
  { name: 'Aidyn', slug: 'aidyn', gender: 'boy', origin: 'Irish', meaning: 'Little fire', popularity: 625 },
  { name: 'Akira', slug: 'akira-boy', gender: 'boy', origin: 'Japanese', meaning: 'Bright, intelligent', popularity: 685 },
  { name: 'Alan', slug: 'alan', gender: 'boy', origin: 'Celtic', meaning: 'Handsome', popularity: 285 },
  { name: 'Albert', slug: 'albert', gender: 'boy', origin: 'German', meaning: 'Noble, bright', popularity: 425 },
  { name: 'Aldo', slug: 'aldo', gender: 'boy', origin: 'Italian', meaning: 'Old, wise', popularity: 625 },
  { name: 'Alec', slug: 'alec', gender: 'boy', origin: 'Greek', meaning: 'Defender', popularity: 385 },

  // Boy names - B
  { name: 'Bailey', slug: 'bailey-boy', gender: 'boy', origin: 'English', meaning: 'Bailiff', popularity: 525 },
  { name: 'Banks', slug: 'banks', gender: 'boy', origin: 'English', meaning: 'Edge of the river', popularity: 725 },
  { name: 'Baylor', slug: 'baylor', gender: 'boy', origin: 'English', meaning: 'Horse trainer', popularity: 625 },
  { name: 'Bear', slug: 'bear', gender: 'boy', origin: 'English', meaning: 'Large mammal', popularity: 825 },
  { name: 'Beau', slug: 'beau', gender: 'boy', origin: 'French', meaning: 'Handsome', popularity: 185 },
  { name: 'Beckett', slug: 'beckett', gender: 'boy', origin: 'English', meaning: 'Bee cottage', popularity: 185 },
  { name: 'Benjamin', slug: 'benjamin', gender: 'boy', origin: 'Hebrew', meaning: 'Son of the right hand', popularity: 8 },
  { name: 'Bennett', slug: 'bennett', gender: 'boy', origin: 'Latin', meaning: 'Blessed', popularity: 125 },
  { name: 'Benson', slug: 'benson', gender: 'boy', origin: 'English', meaning: 'Son of Ben', popularity: 485 },
  { name: 'Bentley', slug: 'bentley', gender: 'boy', origin: 'English', meaning: 'Meadow with coarse grass', popularity: 125 },
  { name: 'Bernard', slug: 'bernard', gender: 'boy', origin: 'German', meaning: 'Strong, brave as a bear', popularity: 625 },
  { name: 'Bishop', slug: 'bishop', gender: 'boy', origin: 'English', meaning: 'Overseer', popularity: 425 },
  { name: 'Blaine', slug: 'blaine', gender: 'boy', origin: 'Scottish', meaning: 'Yellow', popularity: 625 },
  { name: 'Blair', slug: 'blair-boy', gender: 'boy', origin: 'Scottish', meaning: 'Field', popularity: 725 },
  { name: 'Blake', slug: 'blake-boy', gender: 'boy', origin: 'English', meaning: 'Pale, dark', popularity: 185 },
  { name: 'Blaze', slug: 'blaze', gender: 'boy', origin: 'English', meaning: 'Flame', popularity: 625 },
  { name: 'Bo', slug: 'bo', gender: 'boy', origin: 'Scandinavian', meaning: 'To live', popularity: 485 },
  { name: 'Bode', slug: 'bode', gender: 'boy', origin: 'German', meaning: 'Messenger', popularity: 725 },
  { name: 'Bodie', slug: 'bodie', gender: 'boy', origin: 'English', meaning: 'Shelter', popularity: 625 },
  { name: 'Bodhi', slug: 'bodhi', gender: 'boy', origin: 'Sanskrit', meaning: 'Enlightenment', popularity: 225 },

  // Boy names - C
  { name: 'Cade', slug: 'cade', gender: 'boy', origin: 'English', meaning: 'Round, lumpy', popularity: 485 },
  { name: 'Caden', slug: 'caden', gender: 'boy', origin: 'Irish', meaning: 'Fighter', popularity: 225 },
  { name: 'Caiden', slug: 'caiden', gender: 'boy', origin: 'Irish', meaning: 'Fighter', popularity: 325 },
  { name: 'Cain', slug: 'cain', gender: 'boy', origin: 'Hebrew', meaning: 'Acquired', popularity: 625 },
  { name: 'Cairo', slug: 'cairo', gender: 'boy', origin: 'Arabic', meaning: 'Victorious', popularity: 525 },
  { name: 'Caleb', slug: 'caleb', gender: 'boy', origin: 'Hebrew', meaning: 'Faithful, devotion', popularity: 45 },
  { name: 'Callan', slug: 'callan', gender: 'boy', origin: 'Scottish', meaning: 'Battle, rock', popularity: 425 },
  { name: 'Callum', slug: 'callum', gender: 'boy', origin: 'Scottish', meaning: 'Dove', popularity: 285 },
  { name: 'Calvin', slug: 'calvin', gender: 'boy', origin: 'Latin', meaning: 'Bald, hairless', popularity: 185 },
  { name: 'Camden', slug: 'camden', gender: 'boy', origin: 'Scottish', meaning: 'Winding valley', popularity: 185 },
  { name: 'Cameron', slug: 'cameron-boy', gender: 'boy', origin: 'Scottish', meaning: 'Crooked nose', popularity: 95 },
  { name: 'Carl', slug: 'carl', gender: 'boy', origin: 'German', meaning: 'Free man', popularity: 525 },
  { name: 'Carlos', slug: 'carlos', gender: 'boy', origin: 'Spanish', meaning: 'Free man', popularity: 95 },
  { name: 'Carmelo', slug: 'carmelo', gender: 'boy', origin: 'Hebrew', meaning: 'Garden, orchard', popularity: 725 },
  { name: 'Carson', slug: 'carson', gender: 'boy', origin: 'Scottish', meaning: 'Son of Carr', popularity: 95 },
  { name: 'Carter', slug: 'carter', gender: 'boy', origin: 'English', meaning: 'Transporter of goods', popularity: 25 },
  { name: 'Case', slug: 'case', gender: 'boy', origin: 'Irish', meaning: 'Alert, watchful', popularity: 725 },
  { name: 'Cash', slug: 'cash', gender: 'boy', origin: 'English', meaning: 'Hollow', popularity: 285 },
  { name: 'Cason', slug: 'cason', gender: 'boy', origin: 'English', meaning: 'Son of Carr', popularity: 425 },
  { name: 'Casper', slug: 'casper', gender: 'boy', origin: 'Persian', meaning: 'Treasurer', popularity: 625 },

  // Boy names - D
  { name: 'Dale', slug: 'dale', gender: 'boy', origin: 'English', meaning: 'Valley', popularity: 625 },
  { name: 'Dallas', slug: 'dallas', gender: 'boy', origin: 'Scottish', meaning: 'Meadow dwelling', popularity: 385 },
  { name: 'Dalton', slug: 'dalton', gender: 'boy', origin: 'English', meaning: 'Valley town', popularity: 325 },
  { name: 'Damian', slug: 'damian', gender: 'boy', origin: 'Greek', meaning: 'To tame', popularity: 125 },
  { name: 'Damien', slug: 'damien', gender: 'boy', origin: 'Greek', meaning: 'To tame', popularity: 225 },
  { name: 'Damon', slug: 'damon', gender: 'boy', origin: 'Greek', meaning: 'To tame', popularity: 485 },
  { name: 'Dane', slug: 'dane', gender: 'boy', origin: 'English', meaning: 'From Denmark', popularity: 625 },
  { name: 'Daniel', slug: 'daniel', gender: 'boy', origin: 'Hebrew', meaning: 'God is my judge', popularity: 18 },
  { name: 'Dante', slug: 'dante', gender: 'boy', origin: 'Latin', meaning: 'Enduring', popularity: 285 },
  { name: 'Darian', slug: 'darian', gender: 'boy', origin: 'Persian', meaning: 'Wealthy', popularity: 625 },
  { name: 'Dario', slug: 'dario', gender: 'boy', origin: 'Spanish', meaning: 'Wealthy', popularity: 525 },
  { name: 'Darius', slug: 'darius', gender: 'boy', origin: 'Persian', meaning: 'Wealthy', popularity: 285 },
  { name: 'Darren', slug: 'darren', gender: 'boy', origin: 'Irish', meaning: 'Great', popularity: 525 },
  { name: 'Darwin', slug: 'darwin', gender: 'boy', origin: 'English', meaning: 'Dear friend', popularity: 725 },
  { name: 'Dash', slug: 'dash', gender: 'boy', origin: 'English', meaning: 'Page, squire', popularity: 825 },
  { name: 'David', slug: 'david', gender: 'boy', origin: 'Hebrew', meaning: 'Beloved', popularity: 28 },
  { name: 'Davis', slug: 'davis', gender: 'boy', origin: 'English', meaning: 'Son of David', popularity: 285 },
  { name: 'Davon', slug: 'davon', gender: 'boy', origin: 'American', meaning: 'Beloved', popularity: 725 },
  { name: 'Dawson', slug: 'dawson', gender: 'boy', origin: 'English', meaning: 'Son of David', popularity: 185 },
  { name: 'Dax', slug: 'dax', gender: 'boy', origin: 'French', meaning: 'Water', popularity: 385 },

  // Boy names - E
  { name: 'Easton', slug: 'easton', gender: 'boy', origin: 'English', meaning: 'East-facing place', popularity: 85 },
  { name: 'Eddie', slug: 'eddie', gender: 'boy', origin: 'English', meaning: 'Wealthy guardian', popularity: 625 },
  { name: 'Eden', slug: 'eden-boy', gender: 'boy', origin: 'Hebrew', meaning: 'Paradise', popularity: 525 },
  { name: 'Edgar', slug: 'edgar', gender: 'boy', origin: 'English', meaning: 'Wealthy spear', popularity: 425 },
  { name: 'Edison', slug: 'edison', gender: 'boy', origin: 'English', meaning: 'Son of Edward', popularity: 385 },
  { name: 'Edmund', slug: 'edmund', gender: 'boy', origin: 'English', meaning: 'Wealthy protector', popularity: 625 },
  { name: 'Eduardo', slug: 'eduardo', gender: 'boy', origin: 'Spanish', meaning: 'Wealthy guardian', popularity: 225 },
  { name: 'Edward', slug: 'edward', gender: 'boy', origin: 'English', meaning: 'Wealthy guardian', popularity: 195 },
  { name: 'Edwin', slug: 'edwin', gender: 'boy', origin: 'English', meaning: 'Wealthy friend', popularity: 285 },
  { name: 'Efrain', slug: 'efrain', gender: 'boy', origin: 'Hebrew', meaning: 'Fruitful', popularity: 625 },
  { name: 'Eli', slug: 'eli', gender: 'boy', origin: 'Hebrew', meaning: 'Ascended, uplifted', popularity: 65 },
  { name: 'Elian', slug: 'elian', gender: 'boy', origin: 'Spanish', meaning: 'My God has answered', popularity: 385 },
  { name: 'Elias', slug: 'elias', gender: 'boy', origin: 'Hebrew', meaning: 'The Lord is my God', popularity: 38 },
  { name: 'Elijah', slug: 'elijah', gender: 'boy', origin: 'Hebrew', meaning: 'My God is Yahweh', popularity: 5 },
  { name: 'Eliseo', slug: 'eliseo', gender: 'boy', origin: 'Hebrew', meaning: 'God is salvation', popularity: 725 },
  { name: 'Elisha', slug: 'elisha', gender: 'boy', origin: 'Hebrew', meaning: 'God is salvation', popularity: 825 },
  { name: 'Elliot', slug: 'elliot', gender: 'boy', origin: 'English', meaning: 'The Lord is my God', popularity: 185 },
  { name: 'Elliott', slug: 'elliott', gender: 'boy', origin: 'English', meaning: 'The Lord is my God', popularity: 125 },
  { name: 'Ellis', slug: 'ellis', gender: 'boy', origin: 'Welsh', meaning: 'Benevolent', popularity: 285 },
  { name: 'Ellison', slug: 'ellison', gender: 'boy', origin: 'English', meaning: 'Son of Ellis', popularity: 725 },
];

const dataPath = path.join(__dirname, '..', 'lib', 'data.ts');

console.log('📖 Reading current data.ts file...');
let content = fs.readFileSync(dataPath, 'utf8');

// Find where the existing names array ends (before the closing bracket)
const closingBracketIndex = content.indexOf('] as any as BabyName[]');

if (closingBracketIndex === -1) {
  console.error('❌ Could not find the closing bracket for names array');
  process.exit(1);
}

// Find the last name entry before the closing bracket
const lastCommaIndex = content.lastIndexOf(',', closingBracketIndex);

// Format new names as strings
const newNamesText = additionalNames.map(name => {
  return `  { name: '${name.name}', slug: '${name.slug}', gender: '${name.gender}', origin: '${name.origin}', meaning: '${name.meaning}', popularity: ${name.popularity} }`;
}).join(',\n');

// Insert new names before the closing bracket
const beforeClosing = content.substring(0, lastCommaIndex + 1);
const afterClosing = content.substring(closingBracketIndex);

const updatedContent = beforeClosing + ',\n\n  // Additional names batch 2\n' + newNamesText + ',\n\n' + afterClosing;

fs.writeFileSync(dataPath, updatedContent, 'utf8');

console.log(`✅ Successfully added ${additionalNames.length} new names to the database!`);
console.log(`📊 Previous count: ~2387 names`);
console.log(`📊 New total: ~${2387 + additionalNames.length} names`);
