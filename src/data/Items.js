export const Items = [
  {
    id: 63,
    name: 'power-treads',
    link: 'https://dotabuff.com/assets/items/power-treads.jpg',
    tooltip: 'https://dotabuff.com/items/power-treads/tooltip',
    name_loc: 'Power Treads',
    price: '1,400',
    desc: {
      active_desc:
        'Switches between +10 Strength, +10 Agility, or +10 Intelligence.',
      active: 'Active: Switch Attribute',
      notes:
        'Power Treads can be built using a Belt of Strength, Band of Elvenskin, or a Robe of the Magi.',
      lore: 'A pair of tough-skinned boots that change to meet the demands of the wearer.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Belt of Strength',
          icon: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
          cost: '450',
        },
        {
          title: 'Gloves of Haste',
          icon: 'https://dotabuff.com/assets/items/gloves-of-haste.jpg',
          cost: '450',
        },
        {
          title: 'Boots of Speed',
          icon: 'https://dotabuff.com/assets/items/boots-of-speed.jpg',
          cost: '500',
        },
      ],
      basic_desc:
        'Active: Switch AttributeSwitches between +10 Strength, +10 Agility, or +10 Intelligence.',
    },
  },
  {
    id: 1,
    name: 'blink-dagger',
    link: 'https://dotabuff.com/assets/items/blink-dagger.jpg',
    tooltip: 'https://dotabuff.com/items/blink-dagger/tooltip',
    name_loc: 'Blink Dagger',
    price: '2,250',
    desc: {
      active_desc:
        'Teleport to a target point up to 1200 units away. Blink Dagger cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
      active: 'Active: Blink ',
      cooldown: '15',
      notes:
        "Self-casting will cause you to teleport in the direction of your team's fountain.If you used Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
      lore: 'The fabled dagger used by the fastest assassin ever to walk the lands.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Overwhelming Blink',
          icon: 'https://dotabuff.com/assets/items/overwhelming-blink.jpg',
          cost: '6,800',
        },
        {
          title: 'Swift Blink',
          icon: 'https://dotabuff.com/assets/items/swift-blink.jpg',
          cost: '6,800',
        },
        {
          title: 'Arcane Blink',
          icon: 'https://dotabuff.com/assets/items/arcane-blink.jpg',
          cost: '6,800',
        },
      ],
      basic_desc:
        'Active: Blink Teleport to a target point up to 1200 units away. Blink Dagger cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
    },
  },
  {
    id: 36,
    name: 'magic-wand',
    link: 'https://dotabuff.com/assets/items/magic-wand.jpg',
    tooltip: 'https://dotabuff.com/items/magic-wand/tooltip',
    name_loc: 'Magic Wand',
    price: '450',
    desc: {
      active_desc:
        'Instantly restores 15 health and mana per charge stored. Max 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.',
      active: 'Active: Energy Charge',
      cooldown: '13',
      stats: ['+ 3 All Attributes'],
      notes:
        'Gains charges for spells cast by visible enemies in 1200 range.Certain abilities and item abilities will not add charges.',
      lore: 'A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Holy Locket',
          icon: 'https://dotabuff.com/assets/items/holy-locket.jpg',
          cost: '2,400',
        },
      ],
      builds_from: [
        {
          title: 'Iron Branch',
          icon: 'https://dotabuff.com/assets/items/iron-branch.jpg',
          cost: '50',
        },
        {
          title: 'Iron Branch',
          icon: 'https://dotabuff.com/assets/items/iron-branch.jpg',
          cost: '50',
        },
        {
          title: 'Magic Stick',
          icon: 'https://dotabuff.com/assets/items/magic-stick.jpg',
          cost: '200',
        },
        {
          title: 'Recipe: Magic Wand',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '150',
        },
      ],
      basic_desc:
        'Active: Energy ChargeInstantly restores 15 health and mana per charge stored. Max 20 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.',
    },
  },
  {
    id: 108,
    name: 'aghanims-scepter',
    link: 'https://dotabuff.com/assets/items/aghanims-scepter.jpg',
    tooltip: 'https://dotabuff.com/items/aghanims-scepter/tooltip',
    name_loc: "Aghanim's Scepter",
    price: '4,200',
    desc: {
      passive:
        'Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.',
      passive_desc: 'Upgrades the ultimate, and some abilities, of all heroes.',
      stats: ['+ 10 All Attributes', '+ 175 Health', '+ 175 Mana'],
      lore: 'The scepter of a wizard with demigod-like powers.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: "Aghanim's Blessing",
          icon: 'https://dotabuff.com/assets/items/aghanims-blessing.jpg',
          cost: '5,800',
        },
      ],
      builds_from: [
        {
          title: 'Ogre Axe',
          icon: 'https://dotabuff.com/assets/items/ogre-axe.jpg',
          cost: '1,000',
        },
        {
          title: 'Blade of Alacrity',
          icon: 'https://dotabuff.com/assets/items/blade-of-alacrity.jpg',
          cost: '1,000',
        },
        {
          title: 'Staff of Wizardry',
          icon: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
          cost: '1,000',
        },
        {
          title: 'Point Booster',
          icon: 'https://dotabuff.com/assets/items/point-booster.jpg',
          cost: '1,200',
        },
      ],
      basic_desc:
        'Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.',
    },
  },
  {
    id: 50,
    name: 'phase-boots',
    link: 'https://dotabuff.com/assets/items/phase-boots.jpg',
    tooltip: 'https://dotabuff.com/items/phase-boots/tooltip',
    name_loc: 'Phase Boots',
    price: '1,500',
    desc: {
      active_desc:
        'Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3.0 seconds.',
      active: 'Active: Phase ',
      cooldown: '8',
      lore: 'Boots that allow the wearer to travel between the ether.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Hermes Sandals',
          icon: 'https://dotabuff.com/assets/items/hermes-sandals.jpg',
          cost: '4,800',
        },
      ],
      builds_from: [
        {
          title: 'Blades of Attack',
          icon: 'https://dotabuff.com/assets/items/blades-of-attack.jpg',
          cost: '450',
        },
        {
          title: 'Chainmail',
          icon: 'https://dotabuff.com/assets/items/chainmail.jpg',
          cost: '550',
        },
        {
          title: 'Boots of Speed',
          icon: 'https://dotabuff.com/assets/items/boots-of-speed.jpg',
          cost: '500',
        },
      ],
      basic_desc:
        'Active: Phase Gives 20% increased movement speed on melee heroes, and 10% on ranged heroes, and lets you move through units and turn more quickly for 3.0 seconds.',
    },
  },
  {
    id: 46,
    name: 'town-portal-scroll',
    link: 'https://dotabuff.com/assets/items/town-portal-scroll.jpg',
    tooltip: 'https://dotabuff.com/items/town-portal-scroll/tooltip',
    name_loc: 'Town Portal Scroll',
    price: '100',
    desc: {
      use: 'Use: Teleport',
      use_desc:
        "After channeling for 3.0 seconds, teleports you to a target friendly building. Double-click to teleport to your team's base fountain.",
      cooldown: '80',
      manacost: '75',
      notes:
        'If multiple heroes teleport to the same location in succession, the channeling time will be increased for each successive hero.Teleport can be prevented or canceled by Root abilities.',
      lore: 'What a hero truly needs.',
      shop: 'Available at Home Shop',
      basic_desc:
        "Use: TeleportAfter channeling for 3.0 seconds, teleports you to a target friendly building. Double-click to teleport to your team's base fountain.",
    },
  },
  {
    id: 116,
    name: 'black-king-bar',
    link: 'https://dotabuff.com/assets/items/black-king-bar.jpg',
    tooltip: 'https://dotabuff.com/items/black-king-bar/tooltip',
    name_loc: 'Black King Bar',
    price: '4,050',
    desc: {
      active_desc:
        'Applies a basic dispel. Grants 50% Magic resistance and immunity to pure and reflected damage. For the duration of the effect, any negative effect from enemy spells has no effect. Duration: 9 8 7 6 Dispel Type: Basic Dispel',
      active: 'Active: Avatar ',
      cooldown: '90',
      manacost: '50',
      notes:
        'Purchasing another Black King Bar will not reset its immunity duration.Abilities that pierce magic immunity will work fully even when Avatar is activated',
      lore: 'A powerful staff imbued with the strength of giants.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Mithril Hammer',
          icon: 'https://dotabuff.com/assets/items/mithril-hammer.jpg',
          cost: '1,600',
        },
        {
          title: 'Ogre Axe',
          icon: 'https://dotabuff.com/assets/items/ogre-axe.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Black King Bar',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,450',
        },
      ],
      basic_desc:
        'Active: Avatar Applies a basic dispel. Grants 50% Magic resistance and immunity to pure and reflected damage. For the duration of the effect, any negative effect from enemy spells has no effect. Duration: 9 8 7 6 Dispel Type: Basic Dispel',
    },
  },
  {
    id: 180,
    name: 'arcane-boots',
    link: 'https://dotabuff.com/assets/items/arcane-boots.jpg',
    tooltip: 'https://dotabuff.com/items/arcane-boots/tooltip',
    name_loc: 'Arcane Boots',
    price: '1,300',
    desc: {
      active_desc: 'Restores 175 mana to all nearby allies.Radius: 1200',
      active: 'Active: Replenish Mana',
      cooldown: '55',
      stats: ['+ 45 Movement Speed', '+ 250 Mana'],
      notes: 'Does not work on Meepo clones.',
      lore: 'Magi equipped with these boots are valued in battle.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Guardian Greaves',
          icon: 'https://dotabuff.com/assets/items/guardian-greaves.jpg',
          cost: '4,950',
        },
      ],
      builds_from: [
        {
          title: 'Boots of Speed',
          icon: 'https://dotabuff.com/assets/items/boots-of-speed.jpg',
          cost: '500',
        },
        {
          title: 'Energy Booster',
          icon: 'https://dotabuff.com/assets/items/energy-booster.jpg',
          cost: '800',
        },
      ],
      basic_desc:
        'Active: Replenish ManaRestores 175 mana to all nearby allies.Radius: 1200',
    },
  },
  {
    id: 214,
    name: 'tranquil-boots',
    link: 'https://dotabuff.com/assets/items/tranquil-boots.jpg',
    tooltip: 'https://dotabuff.com/items/tranquil-boots/tooltip',
    name_loc: 'Tranquil Boots',
    price: '925',
    desc: {
      passive:
        'Passive: Break Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 40 for 13 seconds.',
      passive_desc:
        'Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 40 for 13 seconds.',
      cooldown: '13',
      stats: ['+ 65 Movement Speed', '+ 14 Health Regeneration'],
      lore: 'While they increase the longevity of the wearer, this boot is not particularly reliable.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Boots of Bearing',
          icon: 'https://dotabuff.com/assets/items/boots-of-bearing.jpg',
          cost: '4,075',
        },
      ],
      builds_from: [
        {
          title: 'Ring of Regen',
          icon: 'https://dotabuff.com/assets/items/ring-of-regen.jpg',
          cost: '175',
        },
        {
          title: 'Boots of Speed',
          icon: 'https://dotabuff.com/assets/items/boots-of-speed.jpg',
          cost: '500',
        },
        {
          title: 'Wind Lace',
          icon: 'https://dotabuff.com/assets/items/wind-lace.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Passive: Break Whenever you attack a hero or are attacked by any unit, the bonus 14 HP regen is lost and the movement speed bonus is reduced to 40 for 13 seconds.',
    },
  },
  {
    id: 48,
    name: 'boots-of-travel',
    link: 'https://dotabuff.com/assets/items/boots-of-travel.jpg',
    tooltip: 'https://dotabuff.com/items/boots-of-travel/tooltip',
    name_loc: 'Boots of Travel',
    price: '2,500',
    desc: {
      stats: ['+ 90 Movement Speed'],
      lore: 'Winged boots that grant omnipresence.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Boots of Travel 2',
          icon: 'https://dotabuff.com/assets/items/boots-of-travel-level-2.jpg',
          cost: '4,500',
        },
      ],
      builds_from: [
        {
          title: 'Boots of Speed',
          icon: 'https://dotabuff.com/assets/items/boots-of-speed.jpg',
          cost: '500',
        },
        {
          title: 'Recipe: Boots of Travel',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '2,000',
        },
      ],
      basic_desc:
        'Upgrade: Town Portal ScrollUpgrades your Town Portal Scroll, allowing it to target units, reduces cooldown and does not consume a charge on usage. ',
    },
  },
  {
    id: 127,
    name: 'blade-mail',
    link: 'https://dotabuff.com/assets/items/blade-mail.jpg',
    tooltip: 'https://dotabuff.com/items/blade-mail/tooltip',
    name_loc: 'Blade Mail',
    price: '2,100',
    desc: {
      active_desc:
        'For 5.5 seconds, the damage returned from all sources is increased by 85%.',
      active: 'Active: Damage Return',
      passive:
        'Passive: Damage ReturnEverytime you are attacked, you return 20 damage plus 20% of the attack damage dealt to you.',
      passive_desc:
        'Everytime you are attacked, you return 20 damage plus 20% of the attack damage dealt to you.',
      cooldown: '25',
      manacost: '25',
      stats: ['+ 20 Damage', '+ 7 Armor'],
      notes:
        "Damage Return is calculated before any kind of reduction.Damage Return doesn't reflect damage from other forms of Blade Mail.Returned damage type is the same as it was received.",
      lore: 'A razor-sharp coat of mail, it is the choice of selfless martyrs in combat.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Broadsword',
          icon: 'https://dotabuff.com/assets/items/broadsword.jpg',
          cost: '1,000',
        },
        {
          title: 'Chainmail',
          icon: 'https://dotabuff.com/assets/items/chainmail.jpg',
          cost: '550',
        },
        {
          title: 'Recipe: Blade Mail',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '550',
        },
      ],
      basic_desc:
        'Active: Damage ReturnFor 5.5 seconds, the damage returned from all sources is increased by 85%.',
    },
  },
  {
    id: 41,
    name: 'bottle',
    link: 'https://dotabuff.com/assets/items/bottle.jpg',
    tooltip: 'https://dotabuff.com/items/bottle/tooltip',
    name_loc: 'Bottle',
    price: '675',
    desc: {
      active_desc:
        'Consumes a charge to restore 110 health and 60 mana over 2.7 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.The Bottle automatically refills at the fountain.Hold Control to use on an allied hero.Range: 350',
      active: 'Active: Regenerate',
      passive:
        'Passive:  Store RuneRunes can be stored in the Bottle for later use by right-clicking them. Unused runes will automatically activate after 90 seconds.Using a stored rune fully refills the Bottle.',
      passive_desc:
        'Runes can be stored in the Bottle for later use by right-clicking them. Unused runes will automatically activate after 90 seconds.Using a stored rune fully refills the Bottle.',
      cooldown: '0.5',
      notes:
        'Bottle is shareable. Stored runes cannot be shared.Using a stored Bounty or Water rune fully refills the bottle if the bottle was full when the rune was stored; otherwise, it refills two charges.',
      lore: 'An old bottle that survived the ages, the contents placed inside become enchanted.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Active: RegenerateConsumes a charge to restore 110 health and 60 mana over 2.7 seconds. If the hero is attacked by an enemy hero or Roshan, the effect is lost.The Bottle automatically refills at the fountain.Hold Control to use on an allied hero.Range: 350',
    },
  },
  {
    id: 152,
    name: 'shadow-blade',
    link: 'https://dotabuff.com/assets/items/shadow-blade.jpg',
    tooltip: 'https://dotabuff.com/items/shadow-blade/tooltip',
    name_loc: 'Shadow Blade',
    price: '3,000',
    desc: {
      active_desc:
        'Makes you invisible for 14.0 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  If attacking to end the invisibility, you gain 175 bonus physical damage on that attack.',
      active: 'Active: Shadow Walk',
      cooldown: '25',
      manacost: '75',
      notes:
        'Has a %windwalk_fade_time% second fade time.If the invisibility ends without attacking, the bonus damage is lost.',
      lore: 'The blade of a fallen king, it allows you to move unseen and strike from the shadows.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Silver Edge',
          icon: 'https://dotabuff.com/assets/items/silver-edge.jpg',
          cost: '5,450',
        },
      ],
      builds_from: [
        {
          title: 'Broadsword',
          icon: 'https://dotabuff.com/assets/items/broadsword.jpg',
          cost: '1,000',
        },
        {
          title: 'Shadow Amulet',
          icon: 'https://dotabuff.com/assets/items/shadow-amulet.jpg',
          cost: '1,000',
        },
        {
          title: 'Blitz Knuckles',
          icon: 'https://dotabuff.com/assets/items/blitz-knuckles.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Active: Shadow WalkMakes you invisible for 14.0 seconds, or until you attack or cast a spell.  While Shadow Walk is active, you move 20% faster and can move through units.  If attacking to end the invisibility, you gain 175 bonus physical damage on that attack.',
    },
  },
  {
    id: 168,
    name: 'desolator',
    link: 'https://dotabuff.com/assets/items/desolator.jpg',
    tooltip: 'https://dotabuff.com/items/desolator/tooltip',
    name_loc: 'Desolator',
    price: '3,500',
    desc: {
      passive:
        "Passive: Corruption Your attacks reduce the target's armor by -6 for 7.0 seconds.",
      passive_desc:
        "Your attacks reduce the target's armor by -6 for 7.0 seconds.",
      notes: 'Armor reduction works on buildings.',
      dispellable: 'Dispellable.',
      lore: 'A wicked weapon, used in torturing political criminals.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Mithril Hammer',
          icon: 'https://dotabuff.com/assets/items/mithril-hammer.jpg',
          cost: '1,600',
        },
        {
          title: 'Mithril Hammer',
          icon: 'https://dotabuff.com/assets/items/mithril-hammer.jpg',
          cost: '1,600',
        },
        {
          title: 'Blight Stone',
          icon: 'https://dotabuff.com/assets/items/blight-stone.jpg',
          cost: '300',
        },
      ],
      basic_desc:
        "Passive: Corruption Your attacks reduce the target's armor by -6 for 7.0 seconds.",
    },
  },
  {
    id: 102,
    name: 'force-staff',
    link: 'https://dotabuff.com/assets/items/force-staff.jpg',
    tooltip: 'https://dotabuff.com/items/force-staff/tooltip',
    name_loc: 'Force Staff',
    price: '2,200',
    desc: {
      active_desc:
        'Pushes any target unit 600 units in the direction it is facing. Range: 550',
      active: 'Active: Force',
      cooldown: '19',
      manacost: '150',
      notes:
        "Self-cast will cause you to use Force on yourself.Force Staff doesn't interrupt the target's actions.Will not work on a unit inside Chronosphere, Duel, or Black Hole.",
      lore: 'Allows you to manipulate others, for good or evil.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Hurricane Pike',
          icon: 'https://dotabuff.com/assets/items/hurricane-pike.jpg',
          cost: '4,450',
        },
      ],
      builds_from: [
        {
          title: 'Staff of Wizardry',
          icon: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Force Staff',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '950',
        },
        {
          title: 'Fluffy Hat',
          icon: 'https://dotabuff.com/assets/items/fluffy-hat.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Active: ForcePushes any target unit 600 units in the direction it is facing. Range: 550',
    },
  },
  {
    id: 29,
    name: 'boots-of-speed',
    link: 'https://dotabuff.com/assets/items/boots-of-speed.jpg',
    tooltip: 'https://dotabuff.com/items/boots-of-speed/tooltip',
    name_loc: 'Boots of Speed',
    price: '500',
    desc: {
      stats: ['+ 45 Movement Speed'],
      lore: 'Fleet footwear, increasing movement.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Boots of Travel',
          icon: 'https://dotabuff.com/assets/items/boots-of-travel.jpg',
          cost: '2,500',
        },
        {
          title: 'Phase Boots',
          icon: 'https://dotabuff.com/assets/items/phase-boots.jpg',
          cost: '1,500',
        },
        {
          title: 'Power Treads',
          icon: 'https://dotabuff.com/assets/items/power-treads.jpg',
          cost: '1,400',
        },
        {
          title: 'Arcane Boots',
          icon: 'https://dotabuff.com/assets/items/arcane-boots.jpg',
          cost: '1,300',
        },
        {
          title: 'Tranquil Boots',
          icon: 'https://dotabuff.com/assets/items/tranquil-boots.jpg',
          cost: '925',
        },
      ],
      basic_desc:
        'Movement speed bonuses from multiple pairs of boots do not stack.',
    },
  },
  {
    id: 40,
    name: 'dust-of-appearance',
    link: 'https://dotabuff.com/assets/items/dust-of-appearance.jpg',
    tooltip: 'https://dotabuff.com/items/dust-of-appearance/tooltip',
    name_loc: 'Dust of Appearance',
    price: '80',
    desc: {
      use: 'Use: Reveal',
      use_desc:
        'For 12 seconds, creates an area that reveals and slows invisible heroes by -20% in a 1050 radius where the caster was standing. Invisible units revealed by dust take 25 damage. The debuff effect on enemies lingers for 8s after leaving the area of effect.',
      cooldown: '30',
      notes:
        'Places a debuff on enemy units in the area that reveals them when they are invisible.',
      dispellable: 'Dispellable.',
      lore: 'One may hide visage, but never volume.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: RevealFor 12 seconds, creates an area that reveals and slows invisible heroes by -20% in a 1050 radius where the caster was standing. Invisible units revealed by dust take 25 damage. The debuff effect on enemies lingers for 8s after leaving the area of effect.',
    },
  },
  {
    id: 77,
    name: 'null-talisman',
    link: 'https://dotabuff.com/assets/items/null-talisman.jpg',
    tooltip: 'https://dotabuff.com/items/null-talisman/tooltip',
    name_loc: 'Null Talisman',
    price: '505',
    desc: {
      lore: 'A small gemstone attached to several chains.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Mantle of Intelligence',
          icon: 'https://dotabuff.com/assets/items/mantle-of-intelligence.jpg',
          cost: '140',
        },
        {
          title: 'Circlet',
          icon: 'https://dotabuff.com/assets/items/circlet.jpg',
          cost: '155',
        },
        {
          title: 'Recipe: Null Talisman',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '210',
        },
      ],
      basic_desc: 'Doubles its bonuses after minute 25.',
    },
  },
  {
    id: 147,
    name: 'manta-style',
    link: 'https://dotabuff.com/assets/items/manta-style.jpg',
    tooltip: 'https://dotabuff.com/items/manta-style/tooltip',
    name_loc: 'Manta Style',
    price: '4,600',
    desc: {
      active_desc:
        'Creates 2 images of your hero that last 20 seconds. Melee images deal 33% damage, while Ranged images deal 28%. Illusions take 300% damage. Dispel Type: Basic Dispel',
      active: 'Active: Mirror Image',
      cooldown: '30',
      manacost: '125',
      stats: [
        '+ 10 Strength',
        '+ 26 Agility',
        '+ 10 Intelligence',
        '+ 12 Attack Speed',
        '+ 10% Movement Speed',
      ],
      notes:
        'Has a %invuln_duration% second cast time during which you are invulnerable.Many effects are removed upon using Manta.Yasha based movement speed bonuses from multiple items do not stack.',
      lore: 'An axe made of reflective materials that causes confusion amongst enemy ranks.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Ultimate Orb',
          icon: 'https://dotabuff.com/assets/items/ultimate-orb.jpg',
          cost: '2,050',
        },
        {
          title: 'Recipe: Manta Style',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '500',
        },
        {
          title: 'Yasha',
          icon: 'https://dotabuff.com/assets/items/yasha.jpg',
          cost: '2,050',
        },
      ],
      basic_desc:
        'Active: Mirror ImageCreates 2 images of your hero that last 20 seconds. Melee images deal 33% damage, while Ranged images deal 28%. Illusions take 300% damage. Dispel Type: Basic Dispel',
    },
  },
  {
    id: 100,
    name: 'euls-scepter-of-divinity',
    link: 'https://dotabuff.com/assets/items/euls-scepter-of-divinity.jpg',
    tooltip: 'https://dotabuff.com/items/euls-scepter-of-divinity/tooltip',
    name_loc: "Eul's Scepter of Divinity",
    price: '2,725',
    desc: {
      active_desc:
        'Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.Enemy units take 50 magical damage upon landing.Range: 550Dispel Type: Basic Dispel',
      active: 'Active: Cyclone ',
      cooldown: '23',
      manacost: '175',
      stats: [
        '+ 10 Intelligence',
        '+ 2.5 Mana Regeneration',
        '+ 20 Movement Speed',
      ],
      notes:
        'You cannot cyclone allies.Cyclones cast on yourself go through spell immunity.Cyclone can dispel some buffs and debuffs.Cyclone duration is unaffected by status resistance.',
      dispellable: 'Dispellable.',
      lore: 'A mysterious scepter passed down through the ages, its disruptive winds can be used for good or evil.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Wind Waker',
          icon: 'https://dotabuff.com/assets/items/wind-waker.jpg',
          cost: '6,825',
        },
      ],
      builds_from: [
        {
          title: 'Staff of Wizardry',
          icon: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
          cost: '1,000',
        },
        {
          title: 'Void Stone',
          icon: 'https://dotabuff.com/assets/items/void-stone.jpg',
          cost: '700',
        },
        {
          title: "Recipe: Eul's Scepter of Divinity",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '775',
        },
        {
          title: 'Wind Lace',
          icon: 'https://dotabuff.com/assets/items/wind-lace.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can only be cast on enemy units or yourself.Enemy units take 50 magical damage upon landing.Range: 550Dispel Type: Basic Dispel',
    },
  },
  {
    id: 75,
    name: 'wraith-band',
    link: 'https://dotabuff.com/assets/items/wraith-band.jpg',
    tooltip: 'https://dotabuff.com/items/wraith-band/tooltip',
    name_loc: 'Wraith Band',
    price: '505',
    desc: {
      lore: 'A circlet with faint whispers echoing about it.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Slippers of Agility',
          icon: 'https://dotabuff.com/assets/items/slippers-of-agility.jpg',
          cost: '140',
        },
        {
          title: 'Circlet',
          icon: 'https://dotabuff.com/assets/items/circlet.jpg',
          cost: '155',
        },
        {
          title: 'Recipe: Wraith Band',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '210',
        },
      ],
      basic_desc: 'Doubles its bonuses after minute 25.',
    },
  },
  {
    id: 232,
    name: 'aether-lens',
    link: 'https://dotabuff.com/assets/items/aether-lens.jpg',
    tooltip: 'https://dotabuff.com/items/aether-lens/tooltip',
    name_loc: 'Aether Lens',
    price: '2,275',
    desc: {
      passive:
        'Passive: Aethereal Focus Increases targeted spell and item cast range.',
      passive_desc: 'Increases targeted spell and item cast range.',
      stats: ['+ 300 Mana', '+ 2.5 Mana Regeneration', '+ 225 Cast Range'],
      notes: 'Passive does not stack.',
      lore: 'Polished with the incantation of his final breath, the gift of a dying mage to his sickly son.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Void Stone',
          icon: 'https://dotabuff.com/assets/items/void-stone.jpg',
          cost: '700',
        },
        {
          title: 'Energy Booster',
          icon: 'https://dotabuff.com/assets/items/energy-booster.jpg',
          cost: '800',
        },
        {
          title: 'Recipe: Aether Lens',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '775',
        },
      ],
      basic_desc:
        'Passive: Aethereal Focus Increases targeted spell and item cast range.',
    },
  },
  {
    id: 212,
    name: 'ring-of-aquila',
    link: 'https://dotabuff.com/assets/items/ring-of-aquila.jpg',
    tooltip: 'https://dotabuff.com/items/ring-of-aquila/tooltip',
    name_loc: 'Ring of Aquila',
    desc: {
      passive:
        'Passive: Aquila AuraGrants 1.25 mana regeneration and 2 armor to nearby allies.Radius: 1200',
      passive_desc:
        'Grants 1.25 mana regeneration and 2 armor to nearby allies.Radius: 1200',
      notes: 'Multiple instances of Aquila Aura do not stack.',
      lore: 'The ring of the fallen Warlord Aquila continues to support armies in battle.',
      basic_desc:
        'Passive: Aquila AuraGrants 1.25 mana regeneration and 2 armor to nearby allies.Radius: 1200',
    },
  },
  {
    id: 145,
    name: 'battle-fury',
    link: 'https://dotabuff.com/assets/items/battle-fury.jpg',
    tooltip: 'https://dotabuff.com/items/battle-fury/tooltip',
    name_loc: 'Battle Fury',
    price: '4,100',
    desc: {
      active_desc: 'Destroy a target tree.Cast Range: 350',
      active: 'Active: Chop Tree ',
      passive:
        'Passive: Quell Increases attack damage against non-hero units by 15 for melee heroes, and 6 for ranged. ',
      passive_desc:
        'Increases attack damage against non-hero units by 15 for melee heroes, and 6 for ranged.',
      cooldown: '4',
      stats: [
        '+ 60 Damage',
        '+ 7.5 Health Regeneration',
        '+ 2.75 Mana Regeneration',
      ],
      notes:
        "Cleave damage goes through spell immunity.If multiple sources of Cleave are present, each Cleave's damage is applied separately.",
      lore: 'The bearer of this mighty axe gains the ability to cut down swaths of enemies at once.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Broadsword',
          icon: 'https://dotabuff.com/assets/items/broadsword.jpg',
          cost: '1,000',
        },
        {
          title: 'Claymore',
          icon: 'https://dotabuff.com/assets/items/claymore.jpg',
          cost: '1,350',
        },
        {
          title: 'Quelling Blade',
          icon: 'https://dotabuff.com/assets/items/quelling-blade.jpg',
          cost: '100',
        },
        {
          title: 'Recipe: Battle Fury',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '450',
        },
        {
          title: 'Cornucopia',
          icon: 'https://dotabuff.com/assets/items/cornucopia.jpg',
          cost: '1,200',
        },
      ],
      basic_desc: 'Active: Chop Tree Destroy a target tree.Cast Range: 350',
    },
  },
  {
    id: 11,
    name: 'quelling-blade',
    link: 'https://dotabuff.com/assets/items/quelling-blade.jpg',
    tooltip: 'https://dotabuff.com/items/quelling-blade/tooltip',
    name_loc: 'Quelling Blade',
    price: '100',
    desc: {
      active_desc: 'Destroy a target tree. Cast Range: 350',
      active: 'Active: Chop Tree ',
      passive:
        'Passive: Quell Increases attack damage against non-hero units by 8 for melee heroes, and 4 for ranged.',
      passive_desc:
        'Increases attack damage against non-hero units by 8 for melee heroes, and 4 for ranged.',
      cooldown: '4',
      notes: 'Effects of multiple quelling blades do not stack.',
      lore: 'The axe of a fallen gnome, it allows you to effectively maneuver the forest.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Battle Fury',
          icon: 'https://dotabuff.com/assets/items/battle-fury.jpg',
          cost: '4,100',
        },
      ],
      basic_desc: 'Active: Chop Tree Destroy a target tree. Cast Range: 350',
    },
  },
  {
    id: 73,
    name: 'bracer',
    link: 'https://dotabuff.com/assets/items/bracer.jpg',
    tooltip: 'https://dotabuff.com/items/bracer/tooltip',
    name_loc: 'Bracer',
    price: '505',
    desc: {
      lore: 'The bracer is a common choice to toughen up defenses and increase longevity.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Gauntlets of Strength',
          icon: 'https://dotabuff.com/assets/items/gauntlets-of-strength.jpg',
          cost: '140',
        },
        {
          title: 'Circlet',
          icon: 'https://dotabuff.com/assets/items/circlet.jpg',
          cost: '155',
        },
        {
          title: 'Recipe: Bracer',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '210',
        },
      ],
      basic_desc: 'Doubles its bonuses after minute 25.',
    },
  },
  {
    id: 154,
    name: 'sange-and-yasha',
    link: 'https://dotabuff.com/assets/items/sange-and-yasha.jpg',
    tooltip: 'https://dotabuff.com/items/sange-and-yasha/tooltip',
    name_loc: 'Sange and Yasha',
    price: '4,100',
    desc: {
      notes:
        'Yasha-based movement speed bonuses from multiple items do not stack.',
      lore: 'Sange and Yasha, when attuned by the moonlight and used together, become a very powerful combination.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Sange',
          icon: 'https://dotabuff.com/assets/items/sange.jpg',
          cost: '2,050',
        },
        {
          title: 'Yasha',
          icon: 'https://dotabuff.com/assets/items/yasha.jpg',
          cost: '2,050',
        },
      ],
    },
  },
  {
    id: 135,
    name: 'monkey-king-bar',
    link: 'https://dotabuff.com/assets/items/monkey-king-bar.jpg',
    tooltip: 'https://dotabuff.com/items/monkey-king-bar/tooltip',
    name_loc: 'Monkey King Bar',
    price: '4,975',
    desc: {
      passive:
        'Passive: PierceGrants each attack a 80% chance to pierce through evasion and deal 70 bonus magical damage.',
      passive_desc:
        'Grants each attack a 80% chance to pierce through evasion and deal 70 bonus magical damage.',
      stats: ['+ 40 Damage', '+ 45 Attack Speed'],
      lore: 'A powerful staff used by a master warrior.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Javelin',
          icon: 'https://dotabuff.com/assets/items/javelin.jpg',
          cost: '1,100',
        },
        {
          title: 'Demon Edge',
          icon: 'https://dotabuff.com/assets/items/demon-edge.jpg',
          cost: '2,200',
        },
        {
          title: 'Recipe: Monkey King Bar',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '675',
        },
        {
          title: 'Blitz Knuckles',
          icon: 'https://dotabuff.com/assets/items/blitz-knuckles.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Passive: PierceGrants each attack a 80% chance to pierce through evasion and deal 70 bonus magical damage.',
    },
  },
  {
    id: 141,
    name: 'daedalus',
    link: 'https://dotabuff.com/assets/items/daedalus.jpg',
    tooltip: 'https://dotabuff.com/items/daedalus/tooltip',
    name_loc: 'Daedalus',
    price: '5,150',
    desc: {
      passive:
        'Passive: Critical StrikeGrants each attack a 30% chance to deal 225% damage.',
      passive_desc: 'Grants each attack a 30% chance to deal 225% damage.',
      stats: ['+ 88 Damage'],
      notes: 'Critical Strike does not work against buildings.',
      lore: 'A weapon of incredible power that is difficult for even the strongest of warriors to control.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Demon Edge',
          icon: 'https://dotabuff.com/assets/items/demon-edge.jpg',
          cost: '2,200',
        },
        {
          title: 'Recipe: Daedalus',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,000',
        },
        {
          title: 'Crystalys',
          icon: 'https://dotabuff.com/assets/items/crystalys.jpg',
          cost: '1,950',
        },
      ],
      basic_desc:
        'Passive: Critical StrikeGrants each attack a 30% chance to deal 225% damage.',
    },
  },
  {
    id: 65,
    name: 'hand-of-midas',
    link: 'https://dotabuff.com/assets/items/hand-of-midas.jpg',
    tooltip: 'https://dotabuff.com/items/hand-of-midas/tooltip',
    name_loc: 'Hand of Midas',
    price: '2,200',
    desc: {
      active_desc:
        'Kills a non-hero target for 160 gold and 2.1x experience. When used on a neutral creep, guarantees to create a neutral item if available.  Cannot be used on Ancient creeps.Range: 600',
      active: 'Active: Transmute ',
      cooldown: '90',
      stats: ['+ 40 Attack Speed'],
      notes:
        'The gold given is reliable gold (you do not get the normal creep bounty).Experience gained by using Transmute is not shared.',
      lore: "Preserved through unknown magical means, the Hand of Midas is a weapon of greed, sacrificing animals to line the owner's pockets.",
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Gloves of Haste',
          icon: 'https://dotabuff.com/assets/items/gloves-of-haste.jpg',
          cost: '450',
        },
        {
          title: 'Recipe: Hand of Midas',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,750',
        },
      ],
      basic_desc:
        'Active: Transmute Kills a non-hero target for 160 gold and 2.1x experience. When used on a neutral creep, guarantees to create a neutral item if available.  Cannot be used on Ancient creeps.Range: 600',
    },
  },
  {
    id: 114,
    name: 'heart-of-tarrasque',
    link: 'https://dotabuff.com/assets/items/heart-of-tarrasque.jpg',
    tooltip: 'https://dotabuff.com/items/heart-of-tarrasque/tooltip',
    name_loc: 'Heart of Tarrasque',
    price: '5,000',
    desc: {
      lore: "Preserved heart of an extinct monster, it bolsters the bearer's fortitude.",
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Reaver',
          icon: 'https://dotabuff.com/assets/items/reaver.jpg',
          cost: '2,800',
        },
        {
          title: 'Vitality Booster',
          icon: 'https://dotabuff.com/assets/items/vitality-booster.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Heart of Tarrasque',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,200',
        },
      ],
    },
  },
  {
    id: 143,
    name: 'skull-basher',
    link: 'https://dotabuff.com/assets/items/skull-basher.jpg',
    tooltip: 'https://dotabuff.com/items/skull-basher/tooltip',
    name_loc: 'Skull Basher',
    price: '2,875',
    desc: {
      passive:
        'Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%.',
      passive_desc:
        'Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%.',
      cooldown: '2.3',
      notes:
        'Does not stack with other sources of Bash.The following heroes cannot trigger Bash on this item: Spirit Breaker, Faceless Void, and Slardar.Does not grant Bash to Clones and Tempest Doubles.',
      dispellable: 'Dispellable by strong dispels only.',
      lore: "A feared weapon in the right hands, this maul's ability to shatter the defenses of its opponents should not be underestimated.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Abyssal Blade',
          icon: 'https://dotabuff.com/assets/items/abyssal-blade.jpg',
          cost: '6,250',
        },
      ],
      builds_from: [
        {
          title: 'Mithril Hammer',
          icon: 'https://dotabuff.com/assets/items/mithril-hammer.jpg',
          cost: '1,600',
        },
        {
          title: 'Belt of Strength',
          icon: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
          cost: '450',
        },
        {
          title: 'Recipe: Skull Basher',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '825',
        },
      ],
      basic_desc:
        'Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 100 bonus physical damage.  Bash chance for ranged heroes is 10%.',
    },
  },
  {
    id: 81,
    name: 'vladmirs-offering',
    link: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
    tooltip: 'https://dotabuff.com/items/vladmirs-offering/tooltip',
    name_loc: "Vladmir's Offering",
    price: '2,450',
    desc: {
      passive:
        "Passive: Vladmir's AuraGrants 20% lifesteal, 18% bonus damage, 1.75 mana regeneration, and 3.0 armor to nearby allies. Lifesteal from creeps is reduced by 50%.Radius: 1200",
      passive_desc:
        'Grants 20% lifesteal, 18% bonus damage, 1.75 mana regeneration, and 3.0 armor to nearby allies. Lifesteal from creeps is reduced by 50%.Radius: 1200',
      lore: 'An eerie mask that is haunted with the malice of a fallen vampire.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Helm of the Overlord',
          icon: 'https://dotabuff.com/assets/items/helm-of-the-overlord.jpg',
          cost: '6,400',
        },
        {
          title: 'Wraith Pact',
          icon: 'https://dotabuff.com/assets/items/wraith-pact.jpg',
          cost: '4,050',
        },
      ],
      builds_from: [
        {
          title: 'Blades of Attack',
          icon: 'https://dotabuff.com/assets/items/blades-of-attack.jpg',
          cost: '450',
        },
        {
          title: 'Morbid Mask',
          icon: 'https://dotabuff.com/assets/items/morbid-mask.jpg',
          cost: '900',
        },
        {
          title: "Recipe: Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '250',
        },
        {
          title: 'Buckler',
          icon: 'https://dotabuff.com/assets/items/buckler.jpg',
          cost: '425',
        },
        {
          title: 'Ring of Basilius',
          icon: 'https://dotabuff.com/assets/items/ring-of-basilius.jpg',
          cost: '425',
        },
      ],
      basic_desc:
        "Passive: Vladmir's AuraGrants 20% lifesteal, 18% bonus damage, 1.75 mana regeneration, and 3.0 armor to nearby allies. Lifesteal from creeps is reduced by 50%.Radius: 1200",
    },
  },
  {
    id: 92,
    name: 'urn-of-shadows',
    link: 'https://dotabuff.com/assets/items/urn-of-shadows.jpg',
    tooltip: 'https://dotabuff.com/items/urn-of-shadows/tooltip',
    name_loc: 'Urn of Shadows',
    price: '880',
    desc: {
      active_desc:
        'Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. Lasts 8.0 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.Cast Range: 750',
      active: 'Active: Soul Release ',
      cooldown: '7',
      stats: ['+ 1.4 Mana Regeneration', '+ 2 All Attributes', '+ 2.0 Armor'],
      notes:
        'Empty urns gain 2 charges.If used on a hero with Soul Release already active on them, it will refresh its duration.',
      dispellable: 'Dispellable.',
      lore: 'Contains the ashes of powerful demons.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Spirit Vessel',
          icon: 'https://dotabuff.com/assets/items/spirit-vessel.jpg',
          cost: '2,980',
        },
      ],
      builds_from: [
        {
          title: 'Ring of Protection',
          icon: 'https://dotabuff.com/assets/items/ring-of-protection.jpg',
          cost: '175',
        },
        {
          title: 'Circlet',
          icon: 'https://dotabuff.com/assets/items/circlet.jpg',
          cost: '155',
        },
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
        {
          title: 'Recipe: Urn of Shadows',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '375',
        },
      ],
      basic_desc:
        'Active: Soul Release Provides 30 health regeneration when cast on allies, and deals 25 damage per second when cast on enemies. Lasts 8.0 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Urn to the dying hero will gain a charge.Cast Range: 750',
    },
  },
  {
    id: 178,
    name: 'soul-ring',
    link: 'https://dotabuff.com/assets/items/soul-ring.jpg',
    tooltip: 'https://dotabuff.com/items/soul-ring/tooltip',
    name_loc: 'Soul Ring',
    price: '855',
    desc: {
      active_desc:
        'Consume %health_sacrifice health to temporarily gain 150 mana.  Lasts 10 seconds.If the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool.',
      active: 'Active: Sacrifice ',
      cooldown: '25',
      notes:
        'If this mana is not used before the duration ends, the extra mana is lost.',
      lore: 'A ring that feeds on the souls of those who wear it.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Ring of Protection',
          icon: 'https://dotabuff.com/assets/items/ring-of-protection.jpg',
          cost: '175',
        },
        {
          title: 'Gauntlets of Strength',
          icon: 'https://dotabuff.com/assets/items/gauntlets-of-strength.jpg',
          cost: '140',
        },
        {
          title: 'Gauntlets of Strength',
          icon: 'https://dotabuff.com/assets/items/gauntlets-of-strength.jpg',
          cost: '140',
        },
        {
          title: 'Recipe: Soul Ring',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '400',
        },
      ],
      basic_desc:
        'Active: Sacrifice Consume %health_sacrifice health to temporarily gain 150 mana.  Lasts 10 seconds.If the mana gained cannot fit in your mana pool, it creates a buffer of mana that will be used before your mana pool.',
    },
  },
  {
    id: 166,
    name: 'maelstrom',
    link: 'https://dotabuff.com/assets/items/maelstrom.jpg',
    tooltip: 'https://dotabuff.com/items/maelstrom/tooltip',
    name_loc: 'Maelstrom',
    price: '2,700',
    desc: {
      passive:
        'Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 135 magical damage to each. Lightning proc pierces evasion.',
      passive_desc:
        'Grants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 135 magical damage to each. Lightning proc pierces evasion.',
      stats: ['+ 24 Damage'],
      lore: 'A hammer forged for the gods themselves, Maelstrom allows its user to harness the power of lightning.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Mjollnir',
          icon: 'https://dotabuff.com/assets/items/mjollnir.jpg',
          cost: '5,500',
        },
        {
          title: 'Gleipnir',
          icon: 'https://dotabuff.com/assets/items/gleipnir.jpg',
          cost: '6,150',
        },
      ],
      builds_from: [
        {
          title: 'Javelin',
          icon: 'https://dotabuff.com/assets/items/javelin.jpg',
          cost: '1,100',
        },
        {
          title: 'Mithril Hammer',
          icon: 'https://dotabuff.com/assets/items/mithril-hammer.jpg',
          cost: '1,600',
        },
      ],
      basic_desc:
        'Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 135 magical damage to each. Lightning proc pierces evasion.',
    },
  },
  {
    id: 123,
    name: 'linkens-sphere',
    link: 'https://dotabuff.com/assets/items/linkens-sphere.jpg',
    tooltip: 'https://dotabuff.com/items/linkens-sphere/tooltip',
    name_loc: "Linken's Sphere",
    price: '4,600',
    desc: {
      active_desc:
        "Temporarily removes Spellblock from the item's owner and transfers it to an allied unit for 14.0 seconds.Range: 700",
      active: 'Active: Transfer Spellblock',
      passive:
        'Passive: SpellblockBlocks most targeted spells once every 14.0 seconds.',
      passive_desc: 'Blocks most targeted spells once every 14.0 seconds.',
      cooldown: '14',
      lore: 'This magical sphere once protected one of the most famous heroes in history.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Ultimate Orb',
          icon: 'https://dotabuff.com/assets/items/ultimate-orb.jpg',
          cost: '2,050',
        },
        {
          title: "Recipe: Linken's Sphere",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,350',
        },
        {
          title: 'Cornucopia',
          icon: 'https://dotabuff.com/assets/items/cornucopia.jpg',
          cost: '1,200',
        },
      ],
      basic_desc:
        'Passive: SpellblockBlocks most targeted spells once every 14.0 seconds.',
    },
  },
  {
    id: 21,
    name: 'ogre-axe',
    link: 'https://dotabuff.com/assets/items/ogre-axe.jpg',
    tooltip: 'https://dotabuff.com/items/ogre-axe/tooltip',
    name_loc: 'Ogre Axe',
    price: '1,000',
    desc: {
      stats: ['+ 10 Strength'],
      lore: 'You grow stronger just by holding it.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Aghanim's Scepter",
          icon: 'https://dotabuff.com/assets/items/aghanims-scepter.jpg',
          cost: '4,200',
        },
        {
          title: 'Black King Bar',
          icon: 'https://dotabuff.com/assets/items/black-king-bar.jpg',
          cost: '4,050',
        },
        {
          title: 'Sange',
          icon: 'https://dotabuff.com/assets/items/sange.jpg',
          cost: '2,050',
        },
        {
          title: 'Echo Sabre',
          icon: 'https://dotabuff.com/assets/items/echo-sabre.jpg',
          cost: '2,500',
        },
        {
          title: 'Eternal Shroud',
          icon: 'https://dotabuff.com/assets/items/eternal-shroud.jpg',
          cost: '3,300',
        },
      ],
    },
  },
  {
    id: 172,
    name: 'mask-of-madness',
    link: 'https://dotabuff.com/assets/items/mask-of-madness.jpg',
    tooltip: 'https://dotabuff.com/items/mask-of-madness/tooltip',
    name_loc: 'Mask of Madness',
    price: '1,775',
    desc: {
      active_desc:
        'Gives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you.  Lasts 6.0 seconds.',
      active: 'Active: Berserk',
      passive:
        'Passive: LifestealHeals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
      passive_desc:
        'Heals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
      cooldown: '16',
      manacost: '25',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'Once this mask is worn, its bearer becomes an uncontrollable aggressive force.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Quarterstaff',
          icon: 'https://dotabuff.com/assets/items/quarterstaff.jpg',
          cost: '875',
        },
        {
          title: 'Morbid Mask',
          icon: 'https://dotabuff.com/assets/items/morbid-mask.jpg',
          cost: '900',
        },
      ],
      basic_desc:
        'Active: BerserkGives 110 attack speed and 30 movement speed, but reduces your armor by 8 and silences you.  Lasts 6.0 seconds.',
    },
  },
  {
    id: 182,
    name: 'stout-shield',
    link: 'https://dotabuff.com/assets/items/stout-shield.jpg',
    tooltip: 'https://dotabuff.com/items/stout-shield/tooltip',
    name_loc: 'Stout Shield',
    price: '100',
    desc: {
      passive:
        'Passive: Damage BlockGrants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 8 damage on ranged.',
      passive_desc:
        'Grants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 8 damage on ranged.',
      notes: 'Multiple sources of damage block do not stack.',
      lore: "One man's wine barrel bottom is another man's shield.",
      shop: 'Available at Home Shop',
      basic_desc:
        'Passive: Damage BlockGrants a 50% chance to block 20 damage from incoming attacks on melee heroes, and 8 damage on ranged.',
    },
  },
  {
    id: 125,
    name: 'vanguard',
    link: 'https://dotabuff.com/assets/items/vanguard.jpg',
    tooltip: 'https://dotabuff.com/items/vanguard/tooltip',
    name_loc: 'Vanguard',
    price: '1,700',
    desc: {
      passive:
        'Passive: Damage Block Grants a 60% chance to block 64 damage from incoming attacks on melee heroes, and 32 damage on ranged.',
      passive_desc:
        'Grants a 60% chance to block 64 damage from incoming attacks on melee heroes, and 32 damage on ranged.',
      stats: ['+ 250 Health', '+ 5.5 Health Regeneration'],
      notes: 'Multiple sources of damage block do not stack.',
      lore: 'A powerful shield that defends its wielder from even the most vicious of attacks.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Abyssal Blade',
          icon: 'https://dotabuff.com/assets/items/abyssal-blade.jpg',
          cost: '6,250',
        },
        {
          title: 'Crimson Guard',
          icon: 'https://dotabuff.com/assets/items/crimson-guard.jpg',
          cost: '3,600',
        },
      ],
      builds_from: [
        {
          title: 'Ring of Health',
          icon: 'https://dotabuff.com/assets/items/ring-of-health.jpg',
          cost: '700',
        },
        {
          title: 'Vitality Booster',
          icon: 'https://dotabuff.com/assets/items/vitality-booster.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Passive: Damage Block Grants a 60% chance to block 64 damage from incoming attacks on melee heroes, and 32 damage on ranged.',
    },
  },
  {
    id: 79,
    name: 'mekansm',
    link: 'https://dotabuff.com/assets/items/mekansm.jpg',
    tooltip: 'https://dotabuff.com/items/mekansm/tooltip',
    name_loc: 'Mekansm',
    price: '1,775',
    desc: {
      active_desc: 'Restores 275 health to allied units in a 1200 radius.',
      active: 'Active: Restore',
      passive:
        'Passive: Mekansm AuraGrants 2.5 health regeneration to allied units in a 1200 radius.',
      passive_desc:
        'Grants 2.5 health regeneration to allied units in a 1200 radius.',
      cooldown: '50',
      manacost: '100',
      notes:
        "Restore does not affect units that have been affected by Restore or Guardian Greaves Mend within Mekansm's cooldown.Multiple instances of Mekansm Aura do not stack.",
      lore: 'A glowing jewel formed out of assorted parts that somehow fit together perfectly.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Guardian Greaves',
          icon: 'https://dotabuff.com/assets/items/guardian-greaves.jpg',
          cost: '4,950',
        },
      ],
      builds_from: [
        {
          title: 'Chainmail',
          icon: 'https://dotabuff.com/assets/items/chainmail.jpg',
          cost: '550',
        },
        {
          title: 'Recipe: Mekansm',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '800',
        },
        {
          title: 'Headdress',
          icon: 'https://dotabuff.com/assets/items/headdress.jpg',
          cost: '425',
        },
      ],
      basic_desc:
        'Active: RestoreRestores 275 health to allied units in a 1200 radius.',
    },
  },
  {
    id: 218,
    name: 'observer-and-sentry-wards',
    link: 'https://dotabuff.com/assets/items/observer-and-sentry-wards.jpg',
    tooltip: 'https://dotabuff.com/items/observer-and-sentry-wards/tooltip',
    name_loc: 'Observer and Sentry Wards',
    price: '50',
    desc: {
      use: 'Use: Plant ',
      use_desc:
        'Plant the currently active ward.  Double-Click to switch the currently active ward.Range: 500',
      notes: 'Hold Control to give one ward to an allied hero.',
      lore: 'Advancements in stacking efficiency have made wards easier to carry than ever.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Observer Ward',
          icon: 'https://dotabuff.com/assets/items/observer-ward.jpg',
          cost: 'No Cost',
        },
        {
          title: 'Sentry Ward',
          icon: 'https://dotabuff.com/assets/items/sentry-ward.jpg',
          cost: '50',
        },
      ],
      basic_desc:
        'Use: Plant Plant the currently active ward.  Double-Click to switch the currently active ward.Range: 500',
    },
  },
  {
    id: 16,
    name: 'iron-branch',
    link: 'https://dotabuff.com/assets/items/iron-branch.jpg',
    tooltip: 'https://dotabuff.com/items/iron-branch/tooltip',
    name_loc: 'Iron Branch',
    price: '50',
    desc: {
      use: 'Use: Plant Tree ',
      use_desc:
        'Targets the ground to plant a happy little tree that lasts for 20 seconds.Range: 400',
      stats: ['+ 1 All Attributes'],
      lore: 'A seemingly ordinary branch, its ironlike qualities are bestowed upon the bearer.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Magic Wand',
          icon: 'https://dotabuff.com/assets/items/magic-wand.jpg',
          cost: '450',
        },
      ],
      basic_desc:
        'Use: Plant Tree Targets the ground to plant a happy little tree that lasts for 20 seconds.Range: 400',
    },
  },
  {
    id: 42,
    name: 'observer-ward',
    link: 'https://dotabuff.com/assets/items/observer-ward.jpg',
    tooltip: 'https://dotabuff.com/items/observer-ward/tooltip',
    name_loc: 'Observer Ward',
    price: '1600',
    desc: {
      use: 'Use: Plant',
      use_desc:
        'Plants an Observer Ward, an invisible watcher that gives ground vision in a 1600 radius to your team. Lasts 6 minutes.Hold Control to give one Observer Ward to an allied hero.Range: 500',
      cooldown: '1',
      lore: 'A form of half-sentient plant, often cultivated by apprentice wizards.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Observer and Sentry Wards',
          icon: 'https://dotabuff.com/assets/items/observer-and-sentry-wards.jpg',
          cost: '50',
        },
      ],
      basic_desc:
        'Use: PlantPlants an Observer Ward, an invisible watcher that gives ground vision in a 1600 radius to your team. Lasts 6 minutes.Hold Control to give one Observer Ward to an allied hero.Range: 500',
    },
  },
  {
    id: 112,
    name: 'assault-cuirass',
    link: 'https://dotabuff.com/assets/items/assault-cuirass.jpg',
    tooltip: 'https://dotabuff.com/items/assault-cuirass/tooltip',
    name_loc: 'Assault Cuirass',
    price: '5,125',
    desc: {
      passive:
        'Passive: Assault Aura Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.Radius: 1200',
      passive_desc:
        'Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.Radius: 1200',
      stats: ['+ 30 Attack Speed', '+ 10 Armor'],
      lore: 'Forged in the depths of the nether reaches, this hellish mail provides an army with increased armor and attack speed.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Platemail',
          icon: 'https://dotabuff.com/assets/items/platemail.jpg',
          cost: '1,400',
        },
        {
          title: 'Hyperstone',
          icon: 'https://dotabuff.com/assets/items/hyperstone.jpg',
          cost: '2,000',
        },
        {
          title: 'Buckler',
          icon: 'https://dotabuff.com/assets/items/buckler.jpg',
          cost: '425',
        },
        {
          title: 'Recipe: Assault Cuirass',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,300',
        },
      ],
      basic_desc:
        'Passive: Assault Aura Grants 30 attack speed and 5 armor to nearby allied units and structures, and decreases nearby enemy unit and structure armor by -5.Radius: 1200',
    },
  },
  {
    id: 208,
    name: 'abyssal-blade',
    link: 'https://dotabuff.com/assets/items/abyssal-blade.jpg',
    tooltip: 'https://dotabuff.com/items/abyssal-blade/tooltip',
    name_loc: 'Abyssal Blade',
    price: '6,250',
    desc: {
      active_desc:
        'Stuns a target enemy unit for 1.6 seconds. Pierces Spell Immunity.Range: 150',
      active: 'Active: Overwhelm ',
      passive:
        'Passive: Bash Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 120 bonus physical damage.  Bash chance for ranged heroes is 10%.',
      passive_desc:
        'Grants melee heroes a 25% chance on hit to stun the target for 1.2 seconds and deal 120 bonus physical damage.  Bash chance for ranged heroes is 10%.',
      cooldown: '35',
      manacost: '75',
      stats: [
        '+ 30 Damage',
        '+ 250 Health',
        '+ 10.0 Health Regeneration',
        '+ 10 Strength',
      ],
      notes:
        'The stun is melee range.Does not stack with other bashes, and does not grant bash to Clones and Tempest Doubles.Multiple sources of damage block do not stack.',
      dispellable: 'Dispellable by strong dispels only.',
      lore: "The lost blade of the Commander of the Abyss, this edge cuts into an enemy's soul.",
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Vanguard',
          icon: 'https://dotabuff.com/assets/items/vanguard.jpg',
          cost: '1,700',
        },
        {
          title: 'Skull Basher',
          icon: 'https://dotabuff.com/assets/items/skull-basher.jpg',
          cost: '2,875',
        },
        {
          title: 'Recipe: Abyssal Blade',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,675',
        },
      ],
      basic_desc:
        'Active: Overwhelm Stuns a target enemy unit for 1.6 seconds. Pierces Spell Immunity.Range: 150',
    },
  },
  {
    id: 158,
    name: 'mjollnir',
    link: 'https://dotabuff.com/assets/items/mjollnir.jpg',
    tooltip: 'https://dotabuff.com/items/mjollnir/tooltip',
    name_loc: 'Mjollnir',
    price: '5,500',
    desc: {
      active_desc:
        'Places a charged shield on a target unit for 15.0 seconds which has a 20% chance to release a 225 magical damage shocking bolt at a nearby attacker and 4 additional enemies.Range: 800',
      active: 'Active: Static Charge',
      passive:
        'Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 12 targets within a 650 radius, dealing 180 magical damage to each. Lightning proc pierces evasion.',
      passive_desc:
        'Grants a 30% chance on attack to release a bolt of electricity that leaps between 12 targets within a 650 radius, dealing 180 magical damage to each. Lightning proc pierces evasion.',
      cooldown: '35',
      manacost: '50',
      notes:
        "Static Charge cannot trigger more than once per second.Static Charge's shock deals magical damage centered on hero with the Static Charge. Static Charge's targets cannot be more than %static_seconary_radius% range away.Static Charge procs will not bounce to heroes that are invisible or hidden by Fog of War.",
      dispellable: 'Dispellable.',
      lore: "Thor's magical hammer, made for him by the dwarves Brok and Eitri.",
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Hyperstone',
          icon: 'https://dotabuff.com/assets/items/hyperstone.jpg',
          cost: '2,000',
        },
        {
          title: 'Recipe: Mjollnir',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '800',
        },
        {
          title: 'Maelstrom',
          icon: 'https://dotabuff.com/assets/items/maelstrom.jpg',
          cost: '2,700',
        },
      ],
      basic_desc:
        'Active: Static ChargePlaces a charged shield on a target unit for 15.0 seconds which has a 20% chance to release a 225 magical damage shocking bolt at a nearby attacker and 4 additional enemies.Range: 800',
    },
  },
  {
    id: 249,
    name: 'silver-edge',
    link: 'https://dotabuff.com/assets/items/silver-edge.jpg',
    tooltip: 'https://dotabuff.com/items/silver-edge/tooltip',
    name_loc: 'Silver Edge',
    price: '5,450',
    desc: {
      active_desc:
        'Makes you invisible for 14.0 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  Attacking to end the invisibility will deal 175 bonus physical damage and a guaranteed 160% critical strike to the target, and disable their passive abilities for 4 seconds.',
      active: 'Active: Shadow Walk',
      passive:
        'Passive: Critical StrikeGrants each attack a 30% chance to deal 160% damage.',
      passive_desc: 'Grants each attack a 30% chance to deal 160% damage.',
      cooldown: '20',
      manacost: '75',
      lore: 'Once used to slay an unjust king, only to have the kingdom erupt into civil war in the aftermath.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Crystalys',
          icon: 'https://dotabuff.com/assets/items/crystalys.jpg',
          cost: '1,950',
        },
        {
          title: 'Shadow Blade',
          icon: 'https://dotabuff.com/assets/items/shadow-blade.jpg',
          cost: '3,000',
        },
        {
          title: 'Recipe: Silver Edge',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '500',
        },
      ],
      basic_desc:
        'Active: Shadow WalkMakes you invisible for 14.0 seconds, or until you attack or cast a spell.  While invisible, you move 25% faster and can move through units.  Attacking to end the invisibility will deal 175 bonus physical damage and a guaranteed 160% critical strike to the target, and disable their passive abilities for 4 seconds.',
    },
  },
  {
    id: 252,
    name: 'echo-sabre',
    link: 'https://dotabuff.com/assets/items/echo-sabre.jpg',
    tooltip: 'https://dotabuff.com/items/echo-sabre/tooltip',
    name_loc: 'Echo Sabre',
    price: '2,500',
    desc: {
      passive:
        'Passive: Echo Strike Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike.',
      passive_desc:
        'Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike.',
      cooldown: '6',
      stats: [
        '+ 15 Damage',
        '+ 13 Strength',
        '+ 10 Intelligence',
        '+ 10 Attack Speed',
        '+ 1.75 Mana Regeneration',
      ],
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'A deceptively swift blade imbued with resonant magic.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Harpoon',
          icon: 'https://dotabuff.com/assets/items/harpoon.jpg',
          cost: '4,500',
        },
      ],
      builds_from: [
        {
          title: 'Ogre Axe',
          icon: 'https://dotabuff.com/assets/items/ogre-axe.jpg',
          cost: '1,000',
        },
        {
          title: 'Oblivion Staff',
          icon: 'https://dotabuff.com/assets/items/oblivion-staff.jpg',
          cost: '1,500',
        },
      ],
      basic_desc:
        'Passive: Echo Strike Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 0.8 seconds on each strike.',
    },
  },
  {
    id: 149,
    name: 'crystalys',
    link: 'https://dotabuff.com/assets/items/crystalys.jpg',
    tooltip: 'https://dotabuff.com/items/crystalys/tooltip',
    name_loc: 'Crystalys',
    price: '1,950',
    desc: {
      passive:
        'Passive: Critical StrikeGrants each attack a 30% chance to deal 160% damage.',
      passive_desc: 'Grants each attack a 30% chance to deal 160% damage.',
      stats: ['+ 32 Damage'],
      notes: 'Critical Strike does not work against buildings.',
      lore: 'A blade forged from rare crystals, it seeks weak points in enemy armor.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Daedalus',
          icon: 'https://dotabuff.com/assets/items/daedalus.jpg',
          cost: '5,150',
        },
        {
          title: 'Silver Edge',
          icon: 'https://dotabuff.com/assets/items/silver-edge.jpg',
          cost: '5,450',
        },
      ],
      builds_from: [
        {
          title: 'Blades of Attack',
          icon: 'https://dotabuff.com/assets/items/blades-of-attack.jpg',
          cost: '450',
        },
        {
          title: 'Broadsword',
          icon: 'https://dotabuff.com/assets/items/broadsword.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Crystalys',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '500',
        },
      ],
      basic_desc:
        'Passive: Critical StrikeGrants each attack a 30% chance to deal 160% damage.',
    },
  },
  {
    id: 609,
    name: 'aghanims-shard',
    link: 'https://dotabuff.com/assets/items/aghanims-shard.jpg',
    tooltip: 'https://dotabuff.com/items/aghanims-shard/tooltip',
    name_loc: "Aghanim's Shard",
    price: '1,400',
    desc: {
      passive:
        'Passive: Ability UpgradeUpgrades an existing ability or adds a new ability to your hero.',
      passive_desc:
        'Upgrades an existing ability or adds a new ability to your hero.',
      lore: 'With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Passive: Ability UpgradeUpgrades an existing ability or adds a new ability to your hero.',
    },
  },
  {
    id: 151,
    name: 'armlet-of-mordiggian',
    link: 'https://dotabuff.com/assets/items/armlet-of-mordiggian.jpg',
    tooltip: 'https://dotabuff.com/items/armlet-of-mordiggian/tooltip',
    name_loc: 'Armlet of Mordiggian',
    price: '2,500',
    desc: {
      notes:
        'The strength change will affect both maximum and current HP, but you cannot die from the change.The strength change occurs over 0.6 seconds.Activating or deactivating Unholy Strength does not interrupt channeling.',
      lore: 'Weapon of choice among brutes, the bearer sacrifices his life energy to gain immense strength and power.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Blades of Attack',
          icon: 'https://dotabuff.com/assets/items/blades-of-attack.jpg',
          cost: '450',
        },
        {
          title: 'Helm of Iron Will',
          icon: 'https://dotabuff.com/assets/items/helm-of-iron-will.jpg',
          cost: '975',
        },
        {
          title: 'Gloves of Haste',
          icon: 'https://dotabuff.com/assets/items/gloves-of-haste.jpg',
          cost: '450',
        },
        {
          title: 'Recipe: Armlet of Mordiggian',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '625',
        },
      ],
      basic_desc:
        'Toggle: Unholy StrengthWhen active, Unholy Strength grants +35 damage, +25 strength and +4 armor, but drains 45 health per second. You cannot die from the health drain when Unholy Strength is activated, nor from the strength loss when Unholy Strength is deactivated.',
    },
  },
  {
    id: 254,
    name: 'glimmer-cape',
    link: 'https://dotabuff.com/assets/items/glimmer-cape.jpg',
    tooltip: 'https://dotabuff.com/items/glimmer-cape/tooltip',
    name_loc: 'Glimmer Cape',
    price: '2,150',
    desc: {
      active_desc:
        'After a 0.5 second delay, grants invisibility, 40 movement speed and a magic damage barrier that absorbs up to 300 damage to you or a target allied unit for 5 seconds. Range: 600Can be cast while channeling.',
      active: 'Active: Glimmer ',
      cooldown: '12',
      manacost: '90',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'The stolen cape of a master illusionist.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Cloak',
          icon: 'https://dotabuff.com/assets/items/cloak.jpg',
          cost: '800',
        },
        {
          title: 'Shadow Amulet',
          icon: 'https://dotabuff.com/assets/items/shadow-amulet.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Glimmer Cape',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '350',
        },
      ],
      basic_desc:
        'Active: Glimmer After a 0.5 second delay, grants invisibility, 40 movement speed and a magic damage barrier that absorbs up to 300 damage to you or a target allied unit for 5 seconds. Range: 600Can be cast while channeling.',
    },
  },
  {
    id: 139,
    name: 'butterfly',
    link: 'https://dotabuff.com/assets/items/butterfly.jpg',
    tooltip: 'https://dotabuff.com/items/butterfly/tooltip',
    name_loc: 'Butterfly',
    price: '4,975',
    desc: {
      stats: [
        '+ 35 Agility',
        '+ 35% Evasion',
        '+ 30 Attack Speed',
        '+ 25 Damage',
      ],
      notes: 'Stacks diminishingly with other sources of Evasion.',
      lore: 'Only the mightiest and most experienced of warriors can wield the Butterfly, but it provides incredible dexterity in combat.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Quarterstaff',
          icon: 'https://dotabuff.com/assets/items/quarterstaff.jpg',
          cost: '875',
        },
        {
          title: 'Talisman of Evasion',
          icon: 'https://dotabuff.com/assets/items/talisman-of-evasion.jpg',
          cost: '1,300',
        },
        {
          title: 'Eaglesong',
          icon: 'https://dotabuff.com/assets/items/eaglesong.jpg',
          cost: '2,800',
        },
      ],
    },
  },
  {
    id: 34,
    name: 'magic-stick',
    link: 'https://dotabuff.com/assets/items/magic-stick.jpg',
    tooltip: 'https://dotabuff.com/items/magic-stick/tooltip',
    name_loc: 'Magic Stick',
    price: '200',
    desc: {
      active_desc:
        'Instantly restores 15 health and mana per charge stored. Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.',
      active: 'Active: Energy Charge ',
      cooldown: '13',
      notes:
        'Gains charges for spells cast by visible enemies in 1200 range.Certain abilities and item abilities will not add charges.',
      lore: 'A simple wand used to channel magic energies, it is favored by apprentice wizards and great warlocks alike.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Magic Wand',
          icon: 'https://dotabuff.com/assets/items/magic-wand.jpg',
          cost: '450',
        },
      ],
      basic_desc:
        'Active: Energy Charge Instantly restores 15 health and mana per charge stored. Max 10 charges. Gains a charge whenever a visible enemy within 1200 range uses an ability.',
    },
  },
  {
    id: 43,
    name: 'sentry-ward',
    link: 'https://dotabuff.com/assets/items/sentry-ward.jpg',
    tooltip: 'https://dotabuff.com/items/sentry-ward/tooltip',
    name_loc: 'Sentry Ward',
    price: '50',
    desc: {
      use: 'Use: Plant ',
      use_desc:
        'Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 900 radius.Lasts 7 minutes.Does not grant ground vision.Hold Control to give one Sentry Ward to an allied hero. Range: 500',
      cooldown: '1',
      lore: 'A form of plant originally grown in the garden of a fearful king.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Observer and Sentry Wards',
          icon: 'https://dotabuff.com/assets/items/observer-and-sentry-wards.jpg',
          cost: '50',
        },
      ],
      basic_desc:
        'Use: Plant Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within a 900 radius.Lasts 7 minutes.Does not grant ground vision.Hold Control to give one Sentry Ward to an allied hero. Range: 500',
    },
  },
  {
    id: 160,
    name: 'eye-of-skadi',
    link: 'https://dotabuff.com/assets/items/eye-of-skadi.jpg',
    tooltip: 'https://dotabuff.com/items/eye-of-skadi/tooltip',
    name_loc: 'Eye of Skadi',
    price: '5,300',
    desc: {
      passive:
        'Passive: Cold Attack Attacks lower enemy movement and attack speed and reduces heals, health regeneration, lifesteal and spell lifesteal by 40% for 3.0 seconds. Slows enemy ranged units by -50% movement speed and by -60 attack speed. Slows enemy melee units by -20% movement speed and by -30 attack speed. ',
      passive_desc:
        'Attacks lower enemy movement and attack speed and reduces heals, health regeneration, lifesteal and spell lifesteal by 40% for 3.0 seconds. Slows enemy ranged units by -50% movement speed and by -60 attack speed. Slows enemy melee units by -20% movement speed and by -30 attack speed.',
      lore: 'Extremely rare artifact, guarded by the azure dragons.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Ultimate Orb',
          icon: 'https://dotabuff.com/assets/items/ultimate-orb.jpg',
          cost: '2,050',
        },
        {
          title: 'Ultimate Orb',
          icon: 'https://dotabuff.com/assets/items/ultimate-orb.jpg',
          cost: '2,050',
        },
        {
          title: 'Point Booster',
          icon: 'https://dotabuff.com/assets/items/point-booster.jpg',
          cost: '1,200',
        },
      ],
      basic_desc:
        'Passive: Cold Attack Attacks lower enemy movement and attack speed and reduces heals, health regeneration, lifesteal and spell lifesteal by 40% for 3.0 seconds. Slows enemy ranged units by -50% movement speed and by -60 attack speed. Slows enemy melee units by -20% movement speed and by -30 attack speed. ',
    },
  },
  {
    id: 37,
    name: 'ghost-scepter',
    link: 'https://dotabuff.com/assets/items/ghost-scepter.jpg',
    tooltip: 'https://dotabuff.com/items/ghost-scepter/tooltip',
    name_loc: 'Ghost Scepter',
    price: '1,500',
    desc: {
      active_desc:
        'You enter ghost form for 4.0 seconds, becoming immune to physical damage, but are unable to attack and -40% more vulnerable to magic damage.',
      active: 'Active: Ghost Form ',
      cooldown: '22',
      stats: ['+ 5 All Attributes'],
      notes:
        'Ends if you become Spell Immune, and will have no effect if you are already Spell Immune.Shares cooldown with Ethereal Blade.',
      dispellable: 'Dispellable.',
      lore: 'Imbues the wielder with a ghostly presence, allowing them to evade physical damage.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Ethereal Blade',
          icon: 'https://dotabuff.com/assets/items/ethereal-blade.jpg',
          cost: '4,650',
        },
      ],
      basic_desc:
        'Active: Ghost Form You enter ghost form for 4.0 seconds, becoming immune to physical damage, but are unable to attack and -40% more vulnerable to magic damage.',
    },
  },
  {
    id: 164,
    name: 'helm-of-the-dominator',
    link: 'https://dotabuff.com/assets/items/helm-of-the-dominator.jpg',
    tooltip: 'https://dotabuff.com/items/helm-of-the-dominator/tooltip',
    name_loc: 'Helm of the Dominator',
    price: '2,625',
    desc: {
      active_desc:
        'Takes control of one neutral, non-ancient target unit and sets its movement speed to 380 and max health to a minimum of 1000. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor.',
      active: 'Active: Dominate',
      cooldown: '45',
      stats: ['+ 6 All Attributes', '+ 6 Armor', '+ 6.0 Health Regeneration'],
      notes:
        'Cannot dominate more than one unit at a time.  If a new unit is dominated, the old one will die.Can also Dominate enemy lane creeps and summoned units.Selling Helm of the Dominator will cause dominated units to die.',
      lore: 'The powerful headpiece of a dead necromancer.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Helm of the Overlord',
          icon: 'https://dotabuff.com/assets/items/helm-of-the-overlord.jpg',
          cost: '6,400',
        },
      ],
      builds_from: [
        {
          title: 'Helm of Iron Will',
          icon: 'https://dotabuff.com/assets/items/helm-of-iron-will.jpg',
          cost: '975',
        },
        {
          title: 'Recipe: Helm of the Dominator',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '650',
        },
        {
          title: 'Diadem',
          icon: 'https://dotabuff.com/assets/items/diadem.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        "Active: DominateTakes control of one neutral, non-ancient target unit and sets its movement speed to 380 and max health to a minimum of 1000. Also provides the unit with +25 base attack damage, +12 health regen, +4 mana regen and +4 armor. Dominated units with a max health of greater than 1000 retain their original max health.  Dominated unit's bounty is set to 100 gold.Range: 700",
    },
  },
  {
    id: 174,
    name: 'diffusal-blade',
    link: 'https://dotabuff.com/assets/items/diffusal-blade.jpg',
    tooltip: 'https://dotabuff.com/items/diffusal-blade/tooltip',
    name_loc: 'Diffusal Blade',
    price: '2,500',
    desc: {
      active_desc: 'Targets an enemy, slowing it for 4.0 seconds.Range: 600',
      active: 'Active: Inhibit ',
      passive:
        'Passive: ManabreakEach attack burns 40 mana from the target, and deals 1 physical damage per burned mana. Burns 8 mana per attack from melee illusions and 8 mana per attack from ranged illusions.',
      passive_desc:
        'Each attack burns 40 mana from the target, and deals 1 physical damage per burned mana. Burns 8 mana per attack from melee illusions and 8 mana per attack from ranged illusions.',
      cooldown: '15',
      notes: 'Does not stack with other diffusal blades.',
      dispellable: 'Dispellable.',
      lore: "An enchanted blade that allows the user to cut straight into the enemy's soul.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Disperser',
          icon: 'https://dotabuff.com/assets/items/disperser.jpg',
          cost: '5,700',
        },
      ],
      builds_from: [
        {
          title: 'Robe of the Magi',
          icon: 'https://dotabuff.com/assets/items/robe-of-the-magi.jpg',
          cost: '450',
        },
        {
          title: 'Blade of Alacrity',
          icon: 'https://dotabuff.com/assets/items/blade-of-alacrity.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Diffusal Blade',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,050',
        },
      ],
      basic_desc:
        'Active: Inhibit Targets an enemy, slowing it for 4.0 seconds.Range: 600',
    },
  },
  {
    id: 98,
    name: 'orchid-malevolence',
    link: 'https://dotabuff.com/assets/items/orchid-malevolence.jpg',
    tooltip: 'https://dotabuff.com/items/orchid-malevolence/tooltip',
    name_loc: 'Orchid Malevolence',
    price: '3,475',
    desc: {
      active_desc:
        'Silences the target unit for 5 seconds. At the end of the silence, 30% of the damage received while silenced is inflicted as bonus magical damage.Range: 900',
      active: 'Active: Soul Burn',
      cooldown: '18',
      manacost: '100',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'A garnet rod constructed from the essence of a fire demon.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Bloodthorn',
          icon: 'https://dotabuff.com/assets/items/bloodthorn.jpg',
          cost: '6,800',
        },
      ],
      builds_from: [
        {
          title: 'Staff of Wizardry',
          icon: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Orchid Malevolence',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '275',
        },
        {
          title: 'Blitz Knuckles',
          icon: 'https://dotabuff.com/assets/items/blitz-knuckles.jpg',
          cost: '1,000',
        },
        {
          title: 'Cornucopia',
          icon: 'https://dotabuff.com/assets/items/cornucopia.jpg',
          cost: '1,200',
        },
      ],
      basic_desc:
        'Active: Soul BurnSilences the target unit for 5 seconds. At the end of the silence, 30% of the damage received while silenced is inflicted as bonus magical damage.Range: 900',
    },
  },
  {
    id: 137,
    name: 'radiance',
    link: 'https://dotabuff.com/assets/items/radiance.jpg',
    tooltip: 'https://dotabuff.com/items/radiance/tooltip',
    name_loc: 'Radiance',
    price: '4,700',
    desc: {
      lore: 'A divine weapon that causes damage and a bright burning effect that lays waste to nearby enemies.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Talisman of Evasion',
          icon: 'https://dotabuff.com/assets/items/talisman-of-evasion.jpg',
          cost: '1,300',
        },
        {
          title: 'Sacred Relic',
          icon: 'https://dotabuff.com/assets/items/sacred-relic.jpg',
          cost: '3,400',
        },
      ],
      basic_desc:
        'Toggle: Burn When active, scorches enemies for 60 magical damage per second and causes them to miss 15% of their attacks. Illusions deal 35 magical damage per second.Radius: 700',
    },
  },
  {
    id: 185,
    name: 'drum-of-endurance',
    link: 'https://dotabuff.com/assets/items/drum-of-endurance.jpg',
    tooltip: 'https://dotabuff.com/items/drum-of-endurance/tooltip',
    name_loc: 'Drum of Endurance',
    price: '1,650',
    desc: {
      active_desc:
        'Consumes a charge and gives +45 attack speed and +13% movement speed to nearby allies for 6 seconds. Comes with 8 charges.Radius: 1200',
      active: 'Active: Endurance  ',
      passive:
        'Passive: Swiftness AuraGrants 20 movement speed to allies.  Radius: 1200',
      passive_desc: 'Grants 20 movement speed to allies.  Radius: 1200',
      cooldown: '30',
      lore: 'A relic that enchants the bodies of those around it for swifter movement in times of crisis.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Boots of Bearing',
          icon: 'https://dotabuff.com/assets/items/boots-of-bearing.jpg',
          cost: '4,075',
        },
      ],
      builds_from: [
        {
          title: 'Belt of Strength',
          icon: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
          cost: '450',
        },
        {
          title: 'Robe of the Magi',
          icon: 'https://dotabuff.com/assets/items/robe-of-the-magi.jpg',
          cost: '450',
        },
        {
          title: 'Recipe: Drum of Endurance',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '500',
        },
        {
          title: 'Wind Lace',
          icon: 'https://dotabuff.com/assets/items/wind-lace.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Active: Endurance Consumes a charge and gives +45 attack speed and +13% movement speed to nearby allies for 6 seconds. Comes with 8 charges.Radius: 1200 ',
    },
  },
  {
    id: 23,
    name: 'staff-of-wizardry',
    link: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
    tooltip: 'https://dotabuff.com/items/staff-of-wizardry/tooltip',
    name_loc: 'Staff of Wizardry',
    price: '1,000',
    desc: {
      stats: ['+ 10 Intelligence'],
      lore: 'A staff of magical powers passed down from the eldest mages.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Orchid Malevolence',
          icon: 'https://dotabuff.com/assets/items/orchid-malevolence.jpg',
          cost: '3,475',
        },
        {
          title: "Eul's Scepter of Divinity",
          icon: 'https://dotabuff.com/assets/items/euls-scepter-of-divinity.jpg',
          cost: '2,725',
        },
        {
          title: 'Force Staff',
          icon: 'https://dotabuff.com/assets/items/force-staff.jpg',
          cost: '2,200',
        },
        {
          title: "Aghanim's Scepter",
          icon: 'https://dotabuff.com/assets/items/aghanims-scepter.jpg',
          cost: '4,200',
        },
        {
          title: 'Rod of Atos',
          icon: 'https://dotabuff.com/assets/items/rod-of-atos.jpg',
          cost: '2,750',
        },
        {
          title: 'Kaya',
          icon: 'https://dotabuff.com/assets/items/kaya.jpg',
          cost: '2,050',
        },
      ],
    },
  },
  {
    id: 263,
    name: 'hurricane-pike',
    link: 'https://dotabuff.com/assets/items/hurricane-pike.jpg',
    tooltip: 'https://dotabuff.com/items/hurricane-pike/tooltip',
    name_loc: 'Hurricane Pike',
    price: '4,450',
    desc: {
      active_desc:
        'Pushes you and target enemy 450 units away from each other, and for 6 seconds, allows you to make 5 attacks against the target without range restrictions and with +100 attack speed.Works like Force Staff when used on self or allies.Enemy Range: 450',
      active: 'Active: Hurricane Thrust ',
      passive:
        "Passive:  Dragon's Reach Increases attack range of ranged heroes.",
      passive_desc: 'Increases attack range of ranged heroes.',
      cooldown: '19',
      manacost: '150',
      notes:
        "Self-cast will use Hurricane Pike on yourself.Hurricane Pike doesn't interrupt the target's actions.Will not work on a unit inside Chronosphere, Duel, or Black Hole.",
      lore: 'A legendary pike once held as royal sigil of the ancient wyvern riders.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Force Staff',
          icon: 'https://dotabuff.com/assets/items/force-staff.jpg',
          cost: '2,200',
        },
        {
          title: 'Dragon Lance',
          icon: 'https://dotabuff.com/assets/items/dragon-lance.jpg',
          cost: '1,900',
        },
        {
          title: 'Recipe: Hurricane Pike',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '350',
        },
      ],
      basic_desc:
        'Active: Hurricane Thrust Pushes you and target enemy 450 units away from each other, and for 6 seconds, allows you to make 5 attacks against the target without range restrictions and with +100 attack speed.Works like Force Staff when used on self or allies.Enemy Range: 450',
    },
  },
  {
    id: 90,
    name: 'pipe-of-insight',
    link: 'https://dotabuff.com/assets/items/pipe-of-insight.jpg',
    tooltip: 'https://dotabuff.com/items/pipe-of-insight/tooltip',
    name_loc: 'Pipe of Insight',
    price: '3,375',
    desc: {
      active_desc:
        'Gives a magic damage barrier that absorbs 450 damage to all nearby allies. Lasts 12.0 seconds.Radius: 1200',
      active: 'Active: Barrier',
      passive:
        'Passive: Insight Aura Gives allied units 2.5 health regeneration and 10% magic resistance.Radius: 1200',
      passive_desc:
        'Gives allied units 2.5 health regeneration and 10% magic resistance.Radius: 1200',
      cooldown: '60',
      manacost: '100',
      notes:
        'Multiple instances of Barrier do not stack.Stacks multiplicatively with other sources of magic resistance.',
      lore: 'A powerful artifact of mysterious origin, it creates barriers against magical forces.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Cloak',
          icon: 'https://dotabuff.com/assets/items/cloak.jpg',
          cost: '800',
        },
        {
          title: 'Ring of Health',
          icon: 'https://dotabuff.com/assets/items/ring-of-health.jpg',
          cost: '700',
        },
        {
          title: 'Recipe: Pipe of Insight',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,450',
        },
        {
          title: 'Headdress',
          icon: 'https://dotabuff.com/assets/items/headdress.jpg',
          cost: '425',
        },
      ],
      basic_desc:
        'Active: BarrierGives a magic damage barrier that absorbs 450 damage to all nearby allies. Lasts 12.0 seconds.Radius: 1200',
    },
  },
  {
    id: 60,
    name: 'point-booster',
    link: 'https://dotabuff.com/assets/items/point-booster.jpg',
    tooltip: 'https://dotabuff.com/items/point-booster/tooltip',
    name_loc: 'Point Booster',
    price: '1,200',
    desc: {
      stats: ['+ 175 Mana', '+ 175 Health'],
      lore: 'A perfectly formed amethyst that nourishes body and mind when held.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: "Aghanim's Scepter",
          icon: 'https://dotabuff.com/assets/items/aghanims-scepter.jpg',
          cost: '4,200',
        },
        {
          title: 'Soul Booster',
          icon: 'https://dotabuff.com/assets/items/soul-booster.jpg',
          cost: '3,000',
        },
        {
          title: 'Eye of Skadi',
          icon: 'https://dotabuff.com/assets/items/eye-of-skadi.jpg',
          cost: '5,300',
        },
        {
          title: 'Wraith Pact',
          icon: 'https://dotabuff.com/assets/items/wraith-pact.jpg',
          cost: '4,050',
        },
        {
          title: 'Phylactery',
          icon: 'https://dotabuff.com/assets/items/phylactery.jpg',
          cost: '2,400',
        },
      ],
    },
  },
  {
    id: 121,
    name: 'bloodstone',
    link: 'https://dotabuff.com/assets/items/bloodstone.jpg',
    tooltip: 'https://dotabuff.com/items/bloodstone/tooltip',
    name_loc: 'Bloodstone',
    price: '4,400',
    desc: {
      active_desc:
        "Increases Bloodstone's Spell Lifesteal by 2.5x and also converts the same percentage of damage dealt to mana. Lasts 6 seconds.",
      active: 'Active: Bloodpact ',
      cooldown: '35',
      notes:
        "Using Bloodpact leaves you drained for 40 seconds and can't benefit from Bloodpact again during that time.",
      lore: "The Bloodstone's bright ruby color is unmistakable on the battlefield, as the owner seems to have infinite vitality and spirit.",
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Recipe: Bloodstone',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '700',
        },
        {
          title: 'Soul Booster',
          icon: 'https://dotabuff.com/assets/items/soul-booster.jpg',
          cost: '3,000',
        },
        {
          title: 'Voodoo Mask',
          icon: 'https://dotabuff.com/assets/items/voodoo-mask.jpg',
          cost: '700',
        },
      ],
      basic_desc:
        "Active: Bloodpact Increases Bloodstone's Spell Lifesteal by 2.5x and also converts the same percentage of damage dealt to mana. Lasts 6 seconds.",
    },
  },
  {
    id: 96,
    name: 'scythe-of-vyse',
    link: 'https://dotabuff.com/assets/items/scythe-of-vyse.jpg',
    tooltip: 'https://dotabuff.com/items/scythe-of-vyse/tooltip',
    name_loc: 'Scythe of Vyse',
    price: '5,550',
    desc: {
      active_desc:
        'Turns a target unit into a harmless critter for 2.8 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.Instantly destroys illusions.Range: 800',
      active: 'Active: Hex',
      cooldown: '20',
      manacost: '250',
      notes:
        "The target will have a base movement speed of %sheep_movement_speed%, but buffs granting maximum movement speed won't be disabled.",
      dispellable: 'Dispellable by strong dispels only.',
      lore: 'The most guarded relic among the cult of Vyse, it is the most coveted weapon among magi.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Ultimate Orb',
          icon: 'https://dotabuff.com/assets/items/ultimate-orb.jpg',
          cost: '2,050',
        },
        {
          title: 'Void Stone',
          icon: 'https://dotabuff.com/assets/items/void-stone.jpg',
          cost: '700',
        },
        {
          title: 'Mystic Staff',
          icon: 'https://dotabuff.com/assets/items/mystic-staff.jpg',
          cost: '2,800',
        },
      ],
      basic_desc:
        'Active: HexTurns a target unit into a harmless critter for 2.8 seconds. The target has a base movement speed of 140 and will be silenced, muted, and disarmed.Instantly destroys illusions.Range: 800',
    },
  },
  {
    id: 71,
    name: 'poor-mans-shield',
    link: 'https://dotabuff.com/assets/items/poor-mans-shield.jpg',
    tooltip: 'https://dotabuff.com/items/poor-mans-shield/tooltip',
    name_loc: "Poor Man's Shield",
    desc: {
      passive:
        'Passive: Damage BlockGives a 100% chance to block 30 damage from incoming attacks on melee heroes, and 20 damage on ranged.Has a 50% chance to block damage from creeps.',
      passive_desc:
        'Gives a 100% chance to block 30 damage from incoming attacks on melee heroes, and 20 damage on ranged.Has a 50% chance to block damage from creeps.',
      stats: ['+ 8 Agility'],
      notes: 'Multiple sources of damage block do not stack.',
      lore: 'A busted old shield that seems to block more than it should.',
      basic_desc:
        'Passive: Damage BlockGives a 100% chance to block 30 damage from incoming attacks on melee heroes, and 20 damage on ranged.Has a 50% chance to block damage from creeps.',
    },
  },
  {
    id: 181,
    name: 'orb-of-venom',
    link: 'https://dotabuff.com/assets/items/orb-of-venom.jpg',
    tooltip: 'https://dotabuff.com/items/orb-of-venom/tooltip',
    name_loc: 'Orb of Venom',
    price: '275',
    desc: {
      passive:
        'Passive: Poison AttackPoisons the target, dealing 2.0 magical damage per second and slowing movement by -13% if the equipped hero is melee, or by -4% if they are ranged. Lasts for 2.0 seconds.',
      passive_desc:
        'Poisons the target, dealing 2.0 magical damage per second and slowing movement by -13% if the equipped hero is melee, or by -4% if they are ranged. Lasts for 2.0 seconds.',
      notes: 'Does not stack with its upgrades.',
      dispellable: 'Dispellable.',
      lore: 'Envenoms your veapon with the venom of a venomous viper.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Orb of Corrosion',
          icon: 'https://dotabuff.com/assets/items/orb-of-corrosion.jpg',
          cost: '925',
        },
      ],
      basic_desc:
        'Passive: Poison AttackPoisons the target, dealing 2.0 magical damage per second and slowing movement by -13% if the equipped hero is melee, or by -4% if they are ranged. Lasts for 2.0 seconds.',
    },
  },
  {
    id: 170,
    name: 'yasha',
    link: 'https://dotabuff.com/assets/items/yasha.jpg',
    tooltip: 'https://dotabuff.com/items/yasha/tooltip',
    name_loc: 'Yasha',
    price: '2,050',
    desc: {
      stats: ['+ 16 Agility', '+ 12 Attack Speed', '+ 10% Movement Speed'],
      notes:
        'Yasha-based movement speed bonuses from multiple items do not stack.',
      lore: 'Yasha is regarded as the swiftest weapon ever created.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Manta Style',
          icon: 'https://dotabuff.com/assets/items/manta-style.jpg',
          cost: '4,600',
        },
        {
          title: 'Sange and Yasha',
          icon: 'https://dotabuff.com/assets/items/sange-and-yasha.jpg',
          cost: '4,100',
        },
        {
          title: 'Yasha and Kaya',
          icon: 'https://dotabuff.com/assets/items/yasha-and-kaya.jpg',
          cost: '4,100',
        },
        {
          title: 'Trident',
          icon: 'https://dotabuff.com/assets/items/trident.jpg',
          cost: '6,151',
        },
      ],
      builds_from: [
        {
          title: 'Band of Elvenskin',
          icon: 'https://dotabuff.com/assets/items/band-of-elvenskin.jpg',
          cost: '450',
        },
        {
          title: 'Blade of Alacrity',
          icon: 'https://dotabuff.com/assets/items/blade-of-alacrity.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Yasha',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '600',
        },
      ],
    },
  },
  {
    id: 236,
    name: 'dragon-lance',
    link: 'https://dotabuff.com/assets/items/dragon-lance.jpg',
    tooltip: 'https://dotabuff.com/items/dragon-lance/tooltip',
    name_loc: 'Dragon Lance',
    price: '1,900',
    desc: {
      passive:
        "Passive: Dragon's Reach Increases attack range of ranged heroes.",
      passive_desc: 'Increases attack range of ranged heroes.',
      notes: 'Passive does not stack.',
      lore: 'The forward charge of the wyvern host grants no quarter.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Hurricane Pike',
          icon: 'https://dotabuff.com/assets/items/hurricane-pike.jpg',
          cost: '4,450',
        },
      ],
      builds_from: [
        {
          title: 'Belt of Strength',
          icon: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
          cost: '450',
        },
        {
          title: 'Blade of Alacrity',
          icon: 'https://dotabuff.com/assets/items/blade-of-alacrity.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Dragon Lance',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '450',
        },
      ],
      basic_desc:
        "Passive: Dragon's Reach Increases attack range of ranged heroes.",
    },
  },
  {
    id: 244,
    name: 'wind-lace',
    link: 'https://dotabuff.com/assets/items/wind-lace.jpg',
    tooltip: 'https://dotabuff.com/items/wind-lace/tooltip',
    name_loc: 'Wind Lace',
    price: '250',
    desc: {
      stats: ['+ 20 Movement Speed'],
      lore: 'Hasten to battle on wind-touched heels.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Eul's Scepter of Divinity",
          icon: 'https://dotabuff.com/assets/items/euls-scepter-of-divinity.jpg',
          cost: '2,725',
        },
        {
          title: 'Drum of Endurance',
          icon: 'https://dotabuff.com/assets/items/drum-of-endurance.jpg',
          cost: '1,650',
        },
        {
          title: 'Tranquil Boots',
          icon: 'https://dotabuff.com/assets/items/tranquil-boots.jpg',
          cost: '925',
        },
        {
          title: 'Solar Crest',
          icon: 'https://dotabuff.com/assets/items/solar-crest.jpg',
          cost: '2,425',
        },
        {
          title: 'Lunar Crest',
          icon: 'https://dotabuff.com/assets/items/lunar-crest.jpg',
          cost: '2,300',
        },
      ],
      basic_desc: 'Bonuses from multiple Wind Laces do not stack.',
    },
  },
  {
    id: 88,
    name: 'ring-of-basilius',
    link: 'https://dotabuff.com/assets/items/ring-of-basilius.jpg',
    tooltip: 'https://dotabuff.com/items/ring-of-basilius/tooltip',
    name_loc: 'Ring of Basilius',
    price: '425',
    desc: {
      passive:
        'Passive: Basilius AuraGrants 1.0 mana regeneration to allies.  Radius: 1200',
      passive_desc: 'Grants 1.0 mana regeneration to allies.  Radius: 1200',
      stats: ['+ 0.5 Mana Regeneration'],
      lore: 'Ring given as a reward to the greatest mages.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
          cost: '2,450',
        },
        {
          title: 'Veil of Discord',
          icon: 'https://dotabuff.com/assets/items/veil-of-discord.jpg',
          cost: '1,525',
        },
        {
          title: 'Witches Switch',
          icon: 'https://dotabuff.com/assets/items/witches-switch.jpg',
          cost: '1,900',
        },
      ],
      builds_from: [
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
        {
          title: 'Recipe: Ring of Basilius',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Passive: Basilius AuraGrants 1.0 mana regeneration to allies.  Radius: 1200',
    },
  },
  {
    id: 44,
    name: 'tango',
    link: 'https://dotabuff.com/assets/items/tango.jpg',
    tooltip: 'https://dotabuff.com/items/tango/tooltip',
    name_loc: 'Tango',
    price: '90',
    desc: {
      use: 'Use: Devour ',
      use_desc:
        'Consumes a target tree to gain 7.0 health regeneration for 16.0 seconds. Consuming an Ironwood Tree doubles the heal amount.Comes with 3 charges.  Can be used on an allied hero to give them one Tango.Tree Range: 165',
      lore: 'Forage to survive on the battlefield.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: Devour Consumes a target tree to gain 7.0 health regeneration for 16.0 seconds. Consuming an Ironwood Tree doubles the heal amount.Comes with 3 charges.  Can be used on an allied hero to give them one Tango.Tree Range: 165',
    },
  },
  {
    id: 231,
    name: 'guardian-greaves',
    link: 'https://dotabuff.com/assets/items/guardian-greaves.jpg',
    tooltip: 'https://dotabuff.com/items/guardian-greaves/tooltip',
    name_loc: 'Guardian Greaves',
    price: '4,950',
    desc: {
      active_desc:
        'Restores 350 health and 200 mana to nearby allies, and removes most negative effects from the caster.Radius: 1200Dispel Type: Basic Dispel',
      active: 'Active: Mend',
      passive:
        "Passive: Guardian Aura Grants 2.5 health regeneration and 3 armor to allied units. If an allied hero's health falls below 25%, this is increased to 14.5 health regeneration and 8 armor. Radius: 1200 ",
      passive_desc:
        "Grants 2.5 health regeneration and 3 armor to allied units. If an allied hero's health falls below 25%, this is increased to 14.5 health regeneration and 8 armor. Radius: 1200",
      cooldown: '40',
      notes:
        "The aura boost only applies to heroes.Mend does not affect units that have been affected by Mend or Mekansm Restore within Guardian Greaves' cooldown.",
      lore: 'One of many holy instruments constructed to honor the Omniscience.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Mekansm',
          icon: 'https://dotabuff.com/assets/items/mekansm.jpg',
          cost: '1,775',
        },
        {
          title: 'Buckler',
          icon: 'https://dotabuff.com/assets/items/buckler.jpg',
          cost: '425',
        },
        {
          title: 'Arcane Boots',
          icon: 'https://dotabuff.com/assets/items/arcane-boots.jpg',
          cost: '1,300',
        },
        {
          title: 'Recipe: Guardian Greaves',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,450',
        },
      ],
      basic_desc:
        'Active: MendRestores 350 health and 200 mana to nearby allies, and removes most negative effects from the caster.Radius: 1200Dispel Type: Basic Dispel',
    },
  },
  {
    id: 119,
    name: 'shivas-guard',
    link: 'https://dotabuff.com/assets/items/shivas-guard.jpg',
    tooltip: 'https://dotabuff.com/items/shivas-guard/tooltip',
    name_loc: "Shiva's Guard",
    price: '4,850',
    desc: {
      active_desc:
        'Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by -40% for 4.0 seconds.Radius: 900',
      active: 'Active: Arctic Blast ',
      passive:
        'Passive: Freezing Aura Reduces the attack speed of all enemies by -45 and all heals, regeneration and lifesteal by 25%. Radius: 1200',
      passive_desc:
        'Reduces the attack speed of all enemies by -45 and all heals, regeneration and lifesteal by 25%. Radius: 1200',
      cooldown: '27',
      manacost: '100',
      stats: ['+ 30 Intelligence', '+ 15 Armor'],
      notes:
        'The wave extends at a speed of %blast_speed% to a max size of %blast_radius%.The Arctic Blast follows its caster.Multiple instances of Freezing Aura do not stack.',
      dispellable: 'Dispellable.',
      lore: 'Said to have belonged to a goddess, today it retains much of its former power.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Platemail',
          icon: 'https://dotabuff.com/assets/items/platemail.jpg',
          cost: '1,400',
        },
        {
          title: 'Mystic Staff',
          icon: 'https://dotabuff.com/assets/items/mystic-staff.jpg',
          cost: '2,800',
        },
        {
          title: "Recipe: Shiva's Guard",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '650',
        },
      ],
      basic_desc:
        'Active: Arctic Blast Emits a freezing wave that deals 200 magical damage to enemies and slows their movement by -40% for 4.0 seconds.Radius: 900',
    },
  },
  {
    id: 8,
    name: 'mithril-hammer',
    link: 'https://dotabuff.com/assets/items/mithril-hammer.jpg',
    tooltip: 'https://dotabuff.com/items/mithril-hammer/tooltip',
    name_loc: 'Mithril Hammer',
    price: '1,600',
    desc: {
      stats: ['+ 24 Damage'],
      lore: 'A hammer forged of pure mithril.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Black King Bar',
          icon: 'https://dotabuff.com/assets/items/black-king-bar.jpg',
          cost: '4,050',
        },
        {
          title: 'Skull Basher',
          icon: 'https://dotabuff.com/assets/items/skull-basher.jpg',
          cost: '2,875',
        },
        {
          title: 'Maelstrom',
          icon: 'https://dotabuff.com/assets/items/maelstrom.jpg',
          cost: '2,700',
        },
        {
          title: 'Desolator',
          icon: 'https://dotabuff.com/assets/items/desolator.jpg',
          cost: '3,500',
        },
      ],
    },
  },
  {
    id: 30,
    name: 'gem-of-true-sight',
    link: 'https://dotabuff.com/assets/items/gem-of-true-sight.jpg',
    tooltip: 'https://dotabuff.com/items/gem-of-true-sight/tooltip',
    name_loc: 'Gem of True Sight',
    price: '900',
    desc: {
      active_desc:
        'Gives True Sight over a 300 radius revealing wards and units even in Fog of War.',
      active: 'Active: Reveal ',
      passive:
        'Passive: True Sight Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier. ',
      passive_desc:
        'Grants the ability to see invisible units and wards to any allied vision within 900 range of its carrier.',
      cooldown: '12',
      notes: 'Disabled while on a courier.',
      lore: "Not one thrall creature of the depths,\nNor spirit bound in drowning's keep,\nNor Maelrawn the Tentacular,\nShall rest till seas, gem comes to sleep.",
      shop: 'Available at Home Shop',
      basic_desc:
        'Active: Reveal Gives True Sight over a 300 radius revealing wards and units even in Fog of War.',
    },
  },
  {
    id: 38,
    name: 'clarity',
    link: 'https://dotabuff.com/assets/items/clarity.jpg',
    tooltip: 'https://dotabuff.com/items/clarity/tooltip',
    name_loc: 'Clarity',
    price: '50',
    desc: {
      use: 'Use: Replenish ',
      use_desc:
        'Grants 6.0 mana regeneration to the target for 25 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'Clear water that enhances the ability to meditate.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: Replenish Grants 6.0 mana regeneration to the target for 25 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250',
    },
  },
  {
    id: 69,
    name: 'perseverance',
    link: 'https://dotabuff.com/assets/items/perseverance.jpg',
    tooltip: 'https://dotabuff.com/items/perseverance/tooltip',
    name_loc: 'Perseverance',
    price: '1,400',
    desc: {
      lore: 'A gem that grants heart to the bearer.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Meteor Hammer',
          icon: 'https://dotabuff.com/assets/items/meteor-hammer.jpg',
          cost: '2,400',
        },
        {
          title: 'Lotus Orb',
          icon: 'https://dotabuff.com/assets/items/lotus-orb.jpg',
          cost: '3,850',
        },
        {
          title: 'Octarine Core',
          icon: 'https://dotabuff.com/assets/items/octarine-core.jpg',
          cost: '4,600',
        },
      ],
      builds_from: [
        {
          title: 'Ring of Health',
          icon: 'https://dotabuff.com/assets/items/ring-of-health.jpg',
          cost: '700',
        },
        {
          title: 'Void Stone',
          icon: 'https://dotabuff.com/assets/items/void-stone.jpg',
          cost: '700',
        },
      ],
    },
  },
  {
    id: 235,
    name: 'octarine-core',
    link: 'https://dotabuff.com/assets/items/octarine-core.jpg',
    tooltip: 'https://dotabuff.com/items/octarine-core/tooltip',
    name_loc: 'Octarine Core',
    price: '4,600',
    desc: {
      passive:
        'Passive: Cooldown ReductionReduces the cooldown time of all spells and items.',
      passive_desc: 'Reduces the cooldown time of all spells and items.',
      cooldown: '6',
      lore: 'At the core of spellcraft are spectrums only the very gifted can sense.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Perseverance',
          icon: 'https://dotabuff.com/assets/items/perseverance.jpg',
          cost: '1,400',
        },
        {
          title: 'Soul Booster',
          icon: 'https://dotabuff.com/assets/items/soul-booster.jpg',
          cost: '3,000',
        },
        {
          title: 'Recipe: Octarine Core',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '200',
        },
      ],
      basic_desc:
        'Passive: Cooldown ReductionReduces the cooldown time of all spells and items.',
    },
  },
  {
    id: 188,
    name: 'smoke-of-deceit',
    link: 'https://dotabuff.com/assets/items/smoke-of-deceit.jpg',
    tooltip: 'https://dotabuff.com/items/smoke-of-deceit/tooltip',
    name_loc: 'Smoke of Deceit',
    price: '50',
    desc: {
      use: 'Use: Disguise ',
      use_desc:
        'Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35.0 seconds. Attacking or moving within 1025 range of an enemy hero or tower, will break the invisibility. Disguise grants invisibility that is immune to True Sight.',
      cooldown: '1',
      lore: "The charlatan wizard Myrddin's only true contribution to the arcane arts.",
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: Disguise Turns the caster and all allied player-controlled units in a 1200 radius invisible, and grants 15% bonus movement speed for 35.0 seconds. Attacking or moving within 1025 range of an enemy hero or tower, will break the invisibility. Disguise grants invisibility that is immune to True Sight.',
    },
  },
  {
    id: 206,
    name: 'rod-of-atos',
    link: 'https://dotabuff.com/assets/items/rod-of-atos.jpg',
    tooltip: 'https://dotabuff.com/items/rod-of-atos/tooltip',
    name_loc: 'Rod of Atos',
    price: '2,750',
    desc: {
      active_desc: 'Roots the target for 2.0 seconds.Range: 1100',
      active: 'Active: Cripple',
      cooldown: '18',
      manacost: '50',
      stats: ['+ 24 Intelligence', '+ 12 Strength', '+ 12 Agility'],
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'Atos, the Lord of Blight, has his essence stored in this deceptively simple wand.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Gleipnir',
          icon: 'https://dotabuff.com/assets/items/gleipnir.jpg',
          cost: '6,150',
        },
      ],
      builds_from: [
        {
          title: 'Staff of Wizardry',
          icon: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Rod of Atos',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '850',
        },
        {
          title: 'Crown',
          icon: 'https://dotabuff.com/assets/items/crown.jpg',
          cost: '450',
        },
        {
          title: 'Crown',
          icon: 'https://dotabuff.com/assets/items/crown.jpg',
          cost: '450',
        },
      ],
      basic_desc: 'Active: CrippleRoots the target for 2.0 seconds.Range: 1100',
    },
  },
  {
    id: 110,
    name: 'refresher-orb',
    link: 'https://dotabuff.com/assets/items/refresher-orb.jpg',
    tooltip: 'https://dotabuff.com/items/refresher-orb/tooltip',
    name_loc: 'Refresher Orb',
    price: '5,000',
    desc: {
      active_desc:
        "Resets the cooldowns of all your items and abilities. Shares a cooldown with Refresher Shard. This item's cooldown only progresses in your hero's main inventory.",
      active: 'Active: Reset Cooldowns',
      cooldown: '180',
      manacost: '350',
      lore: 'A powerful artifact created for wizards.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Recipe: Refresher Orb',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '2,600',
        },
        {
          title: 'Cornucopia',
          icon: 'https://dotabuff.com/assets/items/cornucopia.jpg',
          cost: '1,200',
        },
        {
          title: 'Cornucopia',
          icon: 'https://dotabuff.com/assets/items/cornucopia.jpg',
          cost: '1,200',
        },
      ],
      basic_desc:
        "Active: Reset CooldownsResets the cooldowns of all your items and abilities. Shares a cooldown with Refresher Shard. This item's cooldown only progresses in your hero's main inventory.",
    },
  },
  {
    id: 26,
    name: 'morbid-mask',
    link: 'https://dotabuff.com/assets/items/morbid-mask.jpg',
    tooltip: 'https://dotabuff.com/items/morbid-mask/tooltip',
    name_loc: 'Morbid Mask',
    price: '900',
    desc: {
      passive:
        'Passive: LifestealHeals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
      passive_desc:
        'Heals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
      lore: 'A mask that drains the energy of those caught in its gaze.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
          cost: '2,450',
        },
        {
          title: 'Satanic',
          icon: 'https://dotabuff.com/assets/items/satanic.jpg',
          cost: '5,050',
        },
        {
          title: 'Mask of Madness',
          icon: 'https://dotabuff.com/assets/items/mask-of-madness.jpg',
          cost: '1,775',
        },
      ],
      basic_desc:
        'Passive: LifestealHeals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
    },
  },
  {
    id: 242,
    name: 'crimson-guard',
    link: 'https://dotabuff.com/assets/items/crimson-guard.jpg',
    tooltip: 'https://dotabuff.com/items/crimson-guard/tooltip',
    name_loc: 'Crimson Guard',
    price: '3,600',
    desc: {
      active_desc:
        'For 8 seconds, grant nearby allied heroes and buildings a 100% chance to block damage equal to 70 plus 60% of the casters Strength value from each incoming attack.Units may only be affected by Guard once every 35 seconds.Radius: 1200',
      active: 'Active: Guard ',
      passive:
        'Passive: Damage Block Grants a 60% chance to block 75 damage from incoming attacks on melee heroes, and 50 damage on ranged.',
      passive_desc:
        'Grants a 60% chance to block 75 damage from incoming attacks on melee heroes, and 50 damage on ranged.',
      cooldown: '35',
      notes: 'Multiple sources of damage block do not stack.',
      dispellable: 'Dispellable.',
      lore: 'A cuirass originally built to protect against the dreaded Year Beast.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Helm of Iron Will',
          icon: 'https://dotabuff.com/assets/items/helm-of-iron-will.jpg',
          cost: '975',
        },
        {
          title: 'Vanguard',
          icon: 'https://dotabuff.com/assets/items/vanguard.jpg',
          cost: '1,700',
        },
        {
          title: 'Recipe: Crimson Guard',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '925',
        },
      ],
      basic_desc:
        'Active: Guard For 8 seconds, grant nearby allied heroes and buildings a 100% chance to block damage equal to 70 plus 60% of the casters Strength value from each incoming attack.Units may only be affected by Guard once every 35 seconds.Radius: 1200',
    },
  },
  {
    id: 156,
    name: 'satanic',
    link: 'https://dotabuff.com/assets/items/satanic.jpg',
    tooltip: 'https://dotabuff.com/items/satanic/tooltip',
    name_loc: 'Satanic',
    price: '5,050',
    desc: {
      active_desc:
        'Increases Lifesteal percentage to 175% for 6.0 seconds. Dispel Type: Basic Dispel',
      active: 'Active: Unholy Rage ',
      passive:
        'Passive: LifestealHeals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
      passive_desc:
        'Heals the attacker for a percentage of attack damage dealt. Lifesteal from creeps is reduced by 50%.',
      cooldown: '30',
      lore: 'Immense power at the cost of your soul.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Claymore',
          icon: 'https://dotabuff.com/assets/items/claymore.jpg',
          cost: '1,350',
        },
        {
          title: 'Morbid Mask',
          icon: 'https://dotabuff.com/assets/items/morbid-mask.jpg',
          cost: '900',
        },
        {
          title: 'Reaver',
          icon: 'https://dotabuff.com/assets/items/reaver.jpg',
          cost: '2,800',
        },
      ],
      basic_desc:
        'Active: Unholy RageIncreases Lifesteal percentage to 175% for 6.0 seconds. Dispel Type: Basic Dispel ',
    },
  },
  {
    id: 216,
    name: 'enchanted-mango',
    link: 'https://dotabuff.com/assets/items/enchanted-mango.jpg',
    tooltip: 'https://dotabuff.com/items/enchanted-mango/tooltip',
    name_loc: 'Enchanted Mango',
    price: '65',
    desc: {
      use: 'Use: Eat Mango ',
      use_desc: 'Instantly restores 100 mana.Range: 400',
      stats: ['+ 0.4 Health Regeneration'],
      notes: 'Hold Control to use on a nearby allied hero.',
      lore: 'The bittersweet flavors of Jidi Isle are irresistible to amphibians.',
      shop: 'Available at Home Shop',
      basic_desc: 'Use: Eat Mango Instantly restores 100 mana.Range: 400',
    },
  },
  {
    id: 24,
    name: 'ultimate-orb',
    link: 'https://dotabuff.com/assets/items/ultimate-orb.jpg',
    tooltip: 'https://dotabuff.com/items/ultimate-orb/tooltip',
    name_loc: 'Ultimate Orb',
    price: '2,050',
    desc: {
      stats: ['+ 10 All Attributes'],
      lore: 'A mystical orb containing the essence of life.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Scythe of Vyse',
          icon: 'https://dotabuff.com/assets/items/scythe-of-vyse.jpg',
          cost: '5,550',
        },
        {
          title: "Linken's Sphere",
          icon: 'https://dotabuff.com/assets/items/linkens-sphere.jpg',
          cost: '4,600',
        },
        {
          title: 'Manta Style',
          icon: 'https://dotabuff.com/assets/items/manta-style.jpg',
          cost: '4,600',
        },
        {
          title: 'Eye of Skadi',
          icon: 'https://dotabuff.com/assets/items/eye-of-skadi.jpg',
          cost: '5,300',
        },
        {
          title: 'Samurai Tabi',
          icon: 'https://dotabuff.com/assets/items/samurai-tabi.jpg',
          cost: '4,500',
        },
      ],
    },
  },
  {
    id: 190,
    name: 'veil-of-discord',
    link: 'https://dotabuff.com/assets/items/veil-of-discord.jpg',
    tooltip: 'https://dotabuff.com/items/veil-of-discord/tooltip',
    name_loc: 'Veil of Discord',
    price: '1,525',
    desc: {
      active_desc:
        'Cast a 600 radius blast that causes enemy heroes to take 18% increased damage from spells.Range: 1200Duration: 16.0 seconds.',
      active: 'Active: Magic Weakness  ',
      passive:
        'Passive: Basilius AuraGrants 1.75 mana regeneration to allies.  Radius: 1200',
      passive_desc: 'Grants 1.75 mana regeneration to allies.  Radius: 1200',
      cooldown: '16',
      manacost: '50',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'The headwear of corrupt magi.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Ring of Basilius',
          icon: 'https://dotabuff.com/assets/items/ring-of-basilius.jpg',
          cost: '425',
        },
        {
          title: 'Recipe: Veil of Discord',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '650',
        },
        {
          title: 'Crown',
          icon: 'https://dotabuff.com/assets/items/crown.jpg',
          cost: '450',
        },
      ],
      basic_desc:
        'Active: Magic Weakness Cast a 600 radius blast that causes enemy heroes to take 18% increased damage from spells.Range: 1200Duration: 16.0 seconds. ',
    },
  },
  {
    id: 176,
    name: 'ethereal-blade',
    link: 'https://dotabuff.com/assets/items/ethereal-blade.jpg',
    tooltip: 'https://dotabuff.com/items/ethereal-blade/tooltip',
    name_loc: 'Ethereal Blade',
    price: '4,650',
    desc: {
      active_desc:
        "Converts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and -40% more vulnerable to magic damage.  Enemy targets are also slowed by -80%, and take 1.5x your target's primary attribute + 50 as magical damage.Range: 800Duration: 4.0 seconds",
      active: 'Active: Ether Blast',
      cooldown: '22',
      manacost: '100',
      notes:
        'Shares cooldown with Ghost Scepter.Ethereal units take %ethereal_damage_bonus%%% bonus magic damage.For Universal Heroes, their primary attribute is 60%% the sum of all their attributes.Using a Town Portal Scroll or Boots of Travel will not dispel Ethereal Form.',
      dispellable: 'Dispellable.',
      lore: 'A flickering blade of a ghastly nature, it is capable of dealing damage in both magical and physical planes.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Ghost Scepter',
          icon: 'https://dotabuff.com/assets/items/ghost-scepter.jpg',
          cost: '1,500',
        },
        {
          title: 'Recipe: Ethereal Blade',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,100',
        },
        {
          title: 'Kaya',
          icon: 'https://dotabuff.com/assets/items/kaya.jpg',
          cost: '2,050',
        },
      ],
      basic_desc:
        "Active: Ether BlastConverts the target unit to ethereal form, rendering them immune to physical damage, but unable to attack and -40% more vulnerable to magic damage.  Enemy targets are also slowed by -80%, and take 1.5x your target's primary attribute + 50 as magical damage.Range: 800Duration: 4.0 seconds",
    },
  },
  {
    id: 210,
    name: 'heavens-halberd',
    link: 'https://dotabuff.com/assets/items/heavens-halberd.jpg',
    tooltip: 'https://dotabuff.com/items/heavens-halberd/tooltip',
    name_loc: "Heaven's Halberd",
    price: '3,550',
    desc: {
      active_desc:
        'Prevents a target from attacking for 3.0 seconds on melee targets, and 5.0 seconds on ranged targets.Range: 650',
      active: 'Active: Disarm',
      cooldown: '18',
      manacost: '100',
      stats: [
        '+ 20% Evasion',
        '+ 20 Strength',
        '+ 16% Status Resistance',
        '+ 20% Health Regen and Lifesteal Amp',
      ],
      lore: 'This halberd moves with the speed of a smaller weapon, allowing the bearer to win duels that a heavy edge would not.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Talisman of Evasion',
          icon: 'https://dotabuff.com/assets/items/talisman-of-evasion.jpg',
          cost: '1,300',
        },
        {
          title: 'Sange',
          icon: 'https://dotabuff.com/assets/items/sange.jpg',
          cost: '2,050',
        },
        {
          title: "Recipe: Heaven's Halberd",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '200',
        },
      ],
      basic_desc:
        'Active: DisarmPrevents a target from attacking for 3.0 seconds on melee targets, and 5.0 seconds on ranged targets.Range: 650',
    },
  },
  {
    id: 55,
    name: 'hyperstone',
    link: 'https://dotabuff.com/assets/items/hyperstone.jpg',
    tooltip: 'https://dotabuff.com/items/hyperstone/tooltip',
    name_loc: 'Hyperstone',
    price: '2,000',
    desc: {
      stats: ['+ 60 Attack Speed'],
      lore: 'A mystical, carved stone that boosts the fervor of the holder.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Assault Cuirass',
          icon: 'https://dotabuff.com/assets/items/assault-cuirass.jpg',
          cost: '5,125',
        },
        {
          title: 'Mjollnir',
          icon: 'https://dotabuff.com/assets/items/mjollnir.jpg',
          cost: '5,500',
        },
        {
          title: 'Moon Shard',
          icon: 'https://dotabuff.com/assets/items/moon-shard.jpg',
          cost: '4,000',
        },
      ],
    },
  },
  {
    id: 9,
    name: 'platemail',
    link: 'https://dotabuff.com/assets/items/platemail.jpg',
    tooltip: 'https://dotabuff.com/items/platemail/tooltip',
    name_loc: 'Platemail',
    price: '1,400',
    desc: {
      stats: ['+ 10 Armor'],
      lore: 'Thick metal plates that protect the entire upper body. Avoid dropping on feet.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Assault Cuirass',
          icon: 'https://dotabuff.com/assets/items/assault-cuirass.jpg',
          cost: '5,125',
        },
        {
          title: "Shiva's Guard",
          icon: 'https://dotabuff.com/assets/items/shivas-guard.jpg',
          cost: '4,850',
        },
        {
          title: 'Lotus Orb',
          icon: 'https://dotabuff.com/assets/items/lotus-orb.jpg',
          cost: '3,850',
        },
      ],
    },
  },
  {
    id: 267,
    name: 'spirit-vessel',
    link: 'https://dotabuff.com/assets/items/spirit-vessel.jpg',
    tooltip: 'https://dotabuff.com/items/spirit-vessel/tooltip',
    name_loc: 'Spirit Vessel',
    price: '2,980',
    desc: {
      active_desc:
        'When used against enemies, it reduces health by 4.0% of current health per second, and reduces HP regeneration, healing, lifesteal and spell lifesteal by 45%. Deals 35 damage per second. When used on allies, it provides 40 health regeneration per second. Lasts 8.0 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.Cast Range: 750',
      active: 'Active: Soul Release ',
      cooldown: '7',
      stats: [
        '+ 250 Health',
        '+ 1.75 Mana Regeneration',
        '+ 2 All Attributes',
        '+ 2.0 Armor',
      ],
      lore: 'Forged by a god to entrap the soul of another.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Vitality Booster',
          icon: 'https://dotabuff.com/assets/items/vitality-booster.jpg',
          cost: '1,000',
        },
        {
          title: 'Urn of Shadows',
          icon: 'https://dotabuff.com/assets/items/urn-of-shadows.jpg',
          cost: '880',
        },
        {
          title: 'Recipe: Spirit Vessel',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,100',
        },
      ],
      basic_desc:
        'Active: Soul Release When used against enemies, it reduces health by 4.0% of current health per second, and reduces HP regeneration, healing, lifesteal and spell lifesteal by 45%. Deals 35 damage per second. When used on allies, it provides 40 health regeneration per second. Lasts 8.0 seconds.  Gains charges every time an enemy hero dies within 1400 units.  Only the closest Spirit Vessel to the dying hero will gain a charge.Cast Range: 750',
    },
  },
  {
    id: 98,
    name: 'dagon-level-5',
    link: 'https://dotabuff.com/assets/items/dagon-level-5.jpg',
    tooltip: 'https://dotabuff.com/items/dagon-level-5/tooltip',
    name_loc: 'Dagon (level 5)',
    price: '7,450',
    desc: {
      active_desc:
        'Emits a powerful burst of magical damage upon a targeted enemy unit.Damage: 400 500 600 700 800 Range: 700 / 750 / 800 / 850 / 900',
      active: 'Active: Energy Burst ',
      cooldown: '35 30 25 20 15',
      manacost: '120 140 160 180 200',
      notes: 'Instantly kills illusions.',
      lore: 'A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Recipe: Dagon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,150',
        },
        {
          title: 'Dagon (level 4)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-4.jpg',
          cost: '6,300',
        },
      ],
      basic_desc:
        'Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
    },
  },
  {
    id: 39,
    name: 'healing-salve',
    link: 'https://dotabuff.com/assets/items/healing-salve.jpg',
    tooltip: 'https://dotabuff.com/items/healing-salve/tooltip',
    name_loc: 'Healing Salve',
    price: '100',
    desc: {
      use: 'Use: Salve ',
      use_desc:
        'Grants 30 health regeneration to the target for 13 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Heals for half the amount when cast on an ally.Range: 250',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'A magical salve that can quickly mend even the deepest of wounds.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: Salve Grants 30 health regeneration to the target for 13 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Heals for half the amount when cast on an ally.Range: 250',
    },
  },
  {
    id: 259,
    name: 'kaya',
    link: 'https://dotabuff.com/assets/items/kaya.jpg',
    tooltip: 'https://dotabuff.com/items/kaya/tooltip',
    name_loc: 'Kaya',
    price: '2,050',
    desc: {
      notes: 'Multiple instances of this item do not stack.',
      lore: 'The staff of a renowned sorceress, lost for countless millennia.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Ethereal Blade',
          icon: 'https://dotabuff.com/assets/items/ethereal-blade.jpg',
          cost: '4,650',
        },
        {
          title: 'Kaya and Sange',
          icon: 'https://dotabuff.com/assets/items/kaya-and-sange.jpg',
          cost: '4,100',
        },
        {
          title: 'Yasha and Kaya',
          icon: 'https://dotabuff.com/assets/items/yasha-and-kaya.jpg',
          cost: '4,100',
        },
        {
          title: 'Trident',
          icon: 'https://dotabuff.com/assets/items/trident.jpg',
          cost: '6,151',
        },
      ],
      builds_from: [
        {
          title: 'Robe of the Magi',
          icon: 'https://dotabuff.com/assets/items/robe-of-the-magi.jpg',
          cost: '450',
        },
        {
          title: 'Staff of Wizardry',
          icon: 'https://dotabuff.com/assets/items/staff-of-wizardry.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Kaya',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '600',
        },
      ],
    },
  },
  {
    id: 61,
    name: 'vitality-booster',
    link: 'https://dotabuff.com/assets/items/vitality-booster.jpg',
    tooltip: 'https://dotabuff.com/items/vitality-booster/tooltip',
    name_loc: 'Vitality Booster',
    price: '1,000',
    desc: {
      stats: ['+ 250 Health'],
      lore: 'A ruby gemstone that has been passed down through generations of warrior kin.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Heart of Tarrasque',
          icon: 'https://dotabuff.com/assets/items/heart-of-tarrasque.jpg',
          cost: '5,000',
        },
        {
          title: 'Vanguard',
          icon: 'https://dotabuff.com/assets/items/vanguard.jpg',
          cost: '1,700',
        },
        {
          title: 'Soul Booster',
          icon: 'https://dotabuff.com/assets/items/soul-booster.jpg',
          cost: '3,000',
        },
        {
          title: 'Aeon Disk',
          icon: 'https://dotabuff.com/assets/items/aeon-disk.jpg',
          cost: '3,000',
        },
        {
          title: 'Spirit Vessel',
          icon: 'https://dotabuff.com/assets/items/spirit-vessel.jpg',
          cost: '2,980',
        },
        {
          title: 'Lunar Crest',
          icon: 'https://dotabuff.com/assets/items/lunar-crest.jpg',
          cost: '2,300',
        },
      ],
    },
  },
  {
    id: 7,
    name: 'javelin',
    link: 'https://dotabuff.com/assets/items/javelin.jpg',
    tooltip: 'https://dotabuff.com/items/javelin/tooltip',
    name_loc: 'Javelin',
    price: '1,100',
    desc: {
      passive:
        'Passive: PierceGrants each attack a 30% chance to pierce through evasion and deal 70 bonus magical damage.',
      passive_desc:
        'Grants each attack a 30% chance to pierce through evasion and deal 70 bonus magical damage.',
      lore: "A rather typical spear that can sometimes pierce through an enemy's armor when used to attack.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Monkey King Bar',
          icon: 'https://dotabuff.com/assets/items/monkey-king-bar.jpg',
          cost: '4,975',
        },
        {
          title: 'Maelstrom',
          icon: 'https://dotabuff.com/assets/items/maelstrom.jpg',
          cost: '2,700',
        },
      ],
      basic_desc:
        'Passive: PierceGrants each attack a 30% chance to pierce through evasion and deal 70 bonus magical damage.',
    },
  },
  {
    id: 226,
    name: 'lotus-orb',
    link: 'https://dotabuff.com/assets/items/lotus-orb.jpg',
    tooltip: 'https://dotabuff.com/items/lotus-orb/tooltip',
    name_loc: 'Lotus Orb',
    price: '3,850',
    desc: {
      active_desc:
        'Applies a shield to the target unit for 6.0 seconds which re-casts most targeted spells back to their caster.The shielded unit will still take damage from the spell. Range: 900Dispel Type: Basic Dispel',
      active: 'Active: Echo Shell',
      cooldown: '15',
      manacost: '175',
      stats: [
        '+ 10 Armor',
        '+ 6.5 Health Regeneration',
        '+ 4.0 Mana Regeneration',
        '+ 250 Mana',
      ],
      lore: 'The jewel at its center still reflects a pale image of its creator.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Platemail',
          icon: 'https://dotabuff.com/assets/items/platemail.jpg',
          cost: '1,400',
        },
        {
          title: 'Energy Booster',
          icon: 'https://dotabuff.com/assets/items/energy-booster.jpg',
          cost: '800',
        },
        {
          title: 'Perseverance',
          icon: 'https://dotabuff.com/assets/items/perseverance.jpg',
          cost: '1,400',
        },
        {
          title: 'Recipe: Lotus Orb',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Active: Echo ShellApplies a shield to the target unit for 6.0 seconds which re-casts most targeted spells back to their caster.The shielded unit will still take damage from the spell. Range: 900Dispel Type: Basic Dispel',
    },
  },
  {
    id: 240,
    name: 'blight-stone',
    link: 'https://dotabuff.com/assets/items/blight-stone.jpg',
    tooltip: 'https://dotabuff.com/items/blight-stone/tooltip',
    name_loc: 'Blight Stone',
    price: '300',
    desc: {
      passive:
        "Passive: Lesser Corruption Your attacks reduce the target's armor by -2 for 8.0 seconds.",
      passive_desc:
        "Your attacks reduce the target's armor by -2 for 8.0 seconds.",
      notes: 'Does not stack with its upgrades.',
      dispellable: 'Dispellable.',
      lore: 'An unnerving stone unearthed beneath the Fields of Endless Carnage.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Desolator',
          icon: 'https://dotabuff.com/assets/items/desolator.jpg',
          cost: '3,500',
        },
        {
          title: 'Medallion of Courage',
          icon: 'https://dotabuff.com/assets/items/medallion-of-courage.jpg',
          cost: '1,025',
        },
        {
          title: 'Orb of Corrosion',
          icon: 'https://dotabuff.com/assets/items/orb-of-corrosion.jpg',
          cost: '925',
        },
      ],
      basic_desc:
        "Passive: Lesser Corruption Your attacks reduce the target's armor by -2 for 8.0 seconds.",
    },
  },
  {
    id: 250,
    name: 'bloodthorn',
    link: 'https://dotabuff.com/assets/items/bloodthorn.jpg',
    tooltip: 'https://dotabuff.com/items/bloodthorn/tooltip',
    name_loc: 'Bloodthorn',
    price: '6,800',
    desc: {
      active_desc:
        'Silences a target for 5 seconds. At the end of the silence, an additional 60% of all damage taken during the silence will be dealt to the target as magical damage.All attacks on the silenced target will have True Strike.Range: 900',
      active: 'Active: Soul Rend ',
      passive:
        'Passive: Mage SlayerPlaces a debuff when you attack enemies, causing them to do 35% less spell damage for 6 seconds.',
      passive_desc:
        'Places a debuff when you attack enemies, causing them to do 35% less spell damage for 6 seconds.',
      cooldown: '15',
      manacost: '100',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: "A reviled blade that bites deeper with each wriggle of its victim's final throes.",
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Orchid Malevolence',
          icon: 'https://dotabuff.com/assets/items/orchid-malevolence.jpg',
          cost: '3,475',
        },
        {
          title: 'Recipe: Bloodthorn',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '825',
        },
        {
          title: 'Mage Slayer',
          icon: 'https://dotabuff.com/assets/items/mage-slayer.jpg',
          cost: '2,500',
        },
      ],
      basic_desc:
        'Active: Soul Rend Silences a target for 5 seconds. At the end of the silence, an additional 60% of all damage taken during the silence will be dealt to the target as magical damage.All attacks on the silenced target will have True Strike.Range: 900',
    },
  },
  {
    id: 22,
    name: 'blade-of-alacrity',
    link: 'https://dotabuff.com/assets/items/blade-of-alacrity.jpg',
    tooltip: 'https://dotabuff.com/items/blade-of-alacrity/tooltip',
    name_loc: 'Blade of Alacrity',
    price: '1,000',
    desc: {
      stats: ['+ 10 Agility'],
      lore: 'A long blade imbued with time magic.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Aghanim's Scepter",
          icon: 'https://dotabuff.com/assets/items/aghanims-scepter.jpg',
          cost: '4,200',
        },
        {
          title: 'Yasha',
          icon: 'https://dotabuff.com/assets/items/yasha.jpg',
          cost: '2,050',
        },
        {
          title: 'Diffusal Blade',
          icon: 'https://dotabuff.com/assets/items/diffusal-blade.jpg',
          cost: '2,500',
        },
        {
          title: 'Dragon Lance',
          icon: 'https://dotabuff.com/assets/items/dragon-lance.jpg',
          cost: '1,900',
        },
      ],
    },
  },
  {
    id: 117,
    name: 'aegis-of-the-immortal',
    link: 'https://dotabuff.com/assets/items/aegis-of-the-immortal.jpg',
    tooltip: 'https://dotabuff.com/items/aegis-of-the-immortal/tooltip',
    name_loc: 'Aegis of the Immortal',
    desc: {
      passive:
        'Passive: Reincarnation Brings you to life with full health and mana 5.0 seconds after you die, at the location where you died. Reincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage).',
      passive_desc:
        'Brings you to life with full health and mana 5.0 seconds after you die, at the location where you died. Reincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage).',
      notes: 'Pronounced as ayy jis.',
      lore: 'The Immortal was said to own a shield that protected him from death itself.',
      basic_desc:
        'Passive: Reincarnation Brings you to life with full health and mana 5.0 seconds after you die, at the location where you died. Reincarnation must be used within 5 minutes or Aegis of the Immortal disappears. If it expires, it will heal you over 5 seconds (dispels on damage).',
    },
  },
  {
    id: 53,
    name: 'reaver',
    link: 'https://dotabuff.com/assets/items/reaver.jpg',
    tooltip: 'https://dotabuff.com/items/reaver/tooltip',
    name_loc: 'Reaver',
    price: '2,800',
    desc: {
      stats: ['+ 25 Strength'],
      lore: 'A massive axe capable of tearing whole mountains down.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Heart of Tarrasque',
          icon: 'https://dotabuff.com/assets/items/heart-of-tarrasque.jpg',
          cost: '5,000',
        },
        {
          title: 'Satanic',
          icon: 'https://dotabuff.com/assets/items/satanic.jpg',
          cost: '5,050',
        },
        {
          title: 'Overwhelming Blink',
          icon: 'https://dotabuff.com/assets/items/overwhelming-blink.jpg',
          cost: '6,800',
        },
      ],
    },
  },
  {
    id: 247,
    name: 'moon-shard',
    link: 'https://dotabuff.com/assets/items/moon-shard.jpg',
    tooltip: 'https://dotabuff.com/items/moon-shard/tooltip',
    name_loc: 'Moon Shard',
    price: '4,000',
    desc: {
      passive: 'Passive: Shade SightGrants bonus night vision.',
      passive_desc: 'Grants bonus night vision.',
      use: 'Use: Consume ',
      use_desc:
        'Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.',
      stats: ['+ 140 Attack Speed', '+ 400 Bonus Night Vision'],
      lore: 'Said to be a tear from the lunar goddess Selemene.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Hyperstone',
          icon: 'https://dotabuff.com/assets/items/hyperstone.jpg',
          cost: '2,000',
        },
        {
          title: 'Hyperstone',
          icon: 'https://dotabuff.com/assets/items/hyperstone.jpg',
          cost: '2,000',
        },
      ],
      basic_desc:
        'Use: Consume Consume the Moon Shard to permanently gain 60 attack speed and 200 bonus night vision. Max 1 use.',
    },
  },
  {
    id: 51,
    name: 'demon-edge',
    link: 'https://dotabuff.com/assets/items/demon-edge.jpg',
    tooltip: 'https://dotabuff.com/items/demon-edge/tooltip',
    name_loc: 'Demon Edge',
    price: '2,200',
    desc: {
      stats: ['+ 40 Damage'],
      lore: 'One of the oldest weapons forged by the Demon-Smith Abzidian, it killed its maker when he tested its edge.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Divine Rapier',
          icon: 'https://dotabuff.com/assets/items/divine-rapier.jpg',
          cost: '5,600',
        },
        {
          title: 'Monkey King Bar',
          icon: 'https://dotabuff.com/assets/items/monkey-king-bar.jpg',
          cost: '4,975',
        },
        {
          title: 'Daedalus',
          icon: 'https://dotabuff.com/assets/items/daedalus.jpg',
          cost: '5,150',
        },
        {
          title: 'Disperser',
          icon: 'https://dotabuff.com/assets/items/disperser.jpg',
          cost: '5,700',
        },
      ],
    },
  },
  {
    id: 376,
    name: 'paladin-sword',
    link: 'https://dotabuff.com/assets/items/paladin-sword.jpg',
    tooltip: 'https://dotabuff.com/items/paladin-sword/tooltip',
    name_loc: 'Paladin Sword',
    desc: {
      passive:
        "Passive: Greater Healing Amplifies the wearer's Regeneration, Healing, Lifesteal and Spell Lifesteal by 14%.",
      passive_desc:
        "Amplifies the wearer's Regeneration, Healing, Lifesteal and Spell Lifesteal by 14%.",
      lore: 'The sigil blade of the legendary Brother Yhols of Gausra, stripped from its scabbard on the day of his controversial excommunication.',
      basic_desc:
        "Passive: Greater Healing Amplifies the wearer's Regeneration, Healing, Lifesteal and Spell Lifesteal by 14%.",
    },
  },
  {
    id: 57,
    name: 'void-stone',
    link: 'https://dotabuff.com/assets/items/void-stone.jpg',
    tooltip: 'https://dotabuff.com/items/void-stone/tooltip',
    name_loc: 'Void Stone',
    price: '700',
    desc: {
      stats: ['+ 1.75 Mana Regeneration'],
      lore: 'Jewelry that was once used to channel nether realm magic, this ring pulses with energy.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Perseverance',
          icon: 'https://dotabuff.com/assets/items/perseverance.jpg',
          cost: '1,400',
        },
        {
          title: 'Scythe of Vyse',
          icon: 'https://dotabuff.com/assets/items/scythe-of-vyse.jpg',
          cost: '5,550',
        },
        {
          title: "Eul's Scepter of Divinity",
          icon: 'https://dotabuff.com/assets/items/euls-scepter-of-divinity.jpg',
          cost: '2,725',
        },
        {
          title: 'Aether Lens',
          icon: 'https://dotabuff.com/assets/items/aether-lens.jpg',
          cost: '2,275',
        },
        {
          title: 'Pavise',
          icon: 'https://dotabuff.com/assets/items/pavise.jpg',
          cost: '1,400',
        },
      ],
    },
  },
  {
    id: 256,
    name: 'aeon-disk',
    link: 'https://dotabuff.com/assets/items/aeon-disk.jpg',
    tooltip: 'https://dotabuff.com/items/aeon-disk/tooltip',
    name_loc: 'Aeon Disk',
    price: '3,000',
    desc: {
      passive:
        'Passive: Combo Breaker When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage. Cooldown increases every time it triggers.Dispel Type: Strong Dispel',
      passive_desc:
        'When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage. Cooldown increases every time it triggers.Dispel Type: Strong Dispel',
      cooldown: '105 125 145 165',
      stats: ['+ 250 Health', '+ 300 Mana'],
      lore: 'A powerful artifact long ago smuggled out of the Ivory Incubarium. Or so many believe.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Energy Booster',
          icon: 'https://dotabuff.com/assets/items/energy-booster.jpg',
          cost: '800',
        },
        {
          title: 'Vitality Booster',
          icon: 'https://dotabuff.com/assets/items/vitality-booster.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Aeon Disk',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,200',
        },
      ],
      basic_desc:
        'Passive: Combo Breaker When you take damage and your health falls below 70%, a strong dispel is applied and you gain a 2.5 second buff that provides +75% Status Resistance and causes all damage you deal and are dealt to be reduced to zero. Only triggers on player based damage. Cooldown increases every time it triggers.Dispel Type: Strong Dispel',
    },
  },
  {
    id: 381,
    name: 'titan-sliver',
    link: 'https://dotabuff.com/assets/items/titan-sliver.jpg',
    tooltip: 'https://dotabuff.com/items/titan-sliver/tooltip',
    name_loc: 'Titan Sliver',
    desc: {
      stats: [
        '+ 20% Base Attack Damage',
        '+ 16% Magic Resistance',
        '+ 12% Status Resistance',
      ],
      lore: 'Though many desire this brilliant shard for its obvious qualities, a school of study exists to determine the true size and purpose of its incomprehensible whole.',
    },
  },
  {
    id: 309,
    name: 'mind-breaker',
    link: 'https://dotabuff.com/assets/items/mind-breaker.jpg',
    tooltip: 'https://dotabuff.com/items/mind-breaker/tooltip',
    name_loc: 'Mind Breaker',
    desc: {
      passive:
        'Passive: Silence Strike The next attack silences the hit enemy for 2.0 seconds.',
      passive_desc: 'The next attack silences the hit enemy for 2.0 seconds.',
      cooldown: '12',
      stats: ['+ 45 Magic Attack Damage', '+ 30 Attack Speed'],
      lore: 'A bewitching blade of indeterminate form capable of piercing the psyche of even the most willful foe.',
      basic_desc:
        'Passive: Silence Strike The next attack silences the hit enemy for 2.0 seconds.',
    },
  },
  {
    id: 290,
    name: 'philosophers-stone',
    link: 'https://dotabuff.com/assets/items/philosophers-stone.jpg',
    tooltip: 'https://dotabuff.com/items/philosophers-stone/tooltip',
    name_loc: "Philosopher's Stone",
    desc: {
      stats: ['+ 75 GPM BONUS', '+ 200 Mana', ' -30 -Attack Damage'],
      lore: 'A weightless charm created by an enchanter with a powerful scorn for brute force.',
    },
  },
  {
    id: 220,
    name: 'boots-of-travel-level-2',
    link: 'https://dotabuff.com/assets/items/boots-of-travel-level-2.jpg',
    tooltip: 'https://dotabuff.com/items/boots-of-travel-level-2/tooltip',
    name_loc: 'Boots of Travel 2',
    price: '4,500',
    desc: {
      lore: 'Winged boots that grant omnipresence.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Recipe: Boots of Travel',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '2,000',
        },
        {
          title: 'Boots of Travel',
          icon: 'https://dotabuff.com/assets/items/boots-of-travel.jpg',
          cost: '2,500',
        },
      ],
      basic_desc:
        'Upgrade: Town Portal ScrollUpgrades your Town Portal Scroll, allowing it to target units and heroes, reduces cooldown, channel time and does not consume a charge on usage. ',
    },
  },
  {
    id: 289,
    name: 'quickening-charm',
    link: 'https://dotabuff.com/assets/items/quickening-charm.jpg',
    tooltip: 'https://dotabuff.com/items/quickening-charm/tooltip',
    name_loc: 'Quickening Charm',
    desc: {
      passive:
        'Passive: Cooldown ReductionReduces the cooldown time of all spells and items.',
      passive_desc: 'Reduces the cooldown time of all spells and items.',
      lore: 'An evergreen amulet of druidic origins.',
      basic_desc:
        'Passive: Cooldown ReductionReduces the cooldown time of all spells and items.',
    },
  },
  {
    id: 58,
    name: 'mystic-staff',
    link: 'https://dotabuff.com/assets/items/mystic-staff.jpg',
    tooltip: 'https://dotabuff.com/items/mystic-staff/tooltip',
    name_loc: 'Mystic Staff',
    price: '2,800',
    desc: {
      stats: ['+ 25 Intelligence'],
      lore: 'Enigmatic staff made of only the most expensive crystals.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Scythe of Vyse',
          icon: 'https://dotabuff.com/assets/items/scythe-of-vyse.jpg',
          cost: '5,550',
        },
        {
          title: "Shiva's Guard",
          icon: 'https://dotabuff.com/assets/items/shivas-guard.jpg',
          cost: '4,850',
        },
        {
          title: 'Arcane Blink',
          icon: 'https://dotabuff.com/assets/items/arcane-blink.jpg',
          cost: '6,800',
        },
        {
          title: 'Wind Waker',
          icon: 'https://dotabuff.com/assets/items/wind-waker.jpg',
          cost: '6,825',
        },
        {
          title: "Revenant's Brooch",
          icon: 'https://dotabuff.com/assets/items/revenants-brooch.jpg',
          cost: '6,200',
        },
      ],
    },
  },
  {
    id: 229,
    name: 'solar-crest',
    link: 'https://dotabuff.com/assets/items/solar-crest.jpg',
    tooltip: 'https://dotabuff.com/items/solar-crest/tooltip',
    name_loc: 'Solar Crest',
    price: '2,425',
    desc: {
      active_desc:
        'When cast on an ally, grants them 7 armor, 70 attack speed, and 18% movement speed. When cast on an enemy, removes 7 armor, 70 attack speed, and 18% movement speed.Removes 7 armor from the caster when used. Range: 1000Duration: 8',
      active: 'Active: Shine',
      cooldown: '16',
      notes: 'Shares cooldown with Medallion of Courage.',
      dispellable: 'Dispellable.',
      lore: 'A talisman forged to honor the daytime sky.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Medallion of Courage',
          icon: 'https://dotabuff.com/assets/items/medallion-of-courage.jpg',
          cost: '1,025',
        },
        {
          title: 'Recipe: Solar Crest',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '700',
        },
        {
          title: 'Wind Lace',
          icon: 'https://dotabuff.com/assets/items/wind-lace.jpg',
          cost: '250',
        },
        {
          title: 'Crown',
          icon: 'https://dotabuff.com/assets/items/crown.jpg',
          cost: '450',
        },
      ],
      basic_desc:
        'Active: ShineWhen cast on an ally, grants them 7 armor, 70 attack speed, and 18% movement speed. When cast on an enemy, removes 7 armor, 70 attack speed, and 18% movement speed.Removes 7 armor from the caster when used. Range: 1000Duration: 8',
    },
  },
  {
    id: 13,
    name: 'gauntlets-of-strength',
    link: 'https://dotabuff.com/assets/items/gauntlets-of-strength.jpg',
    tooltip: 'https://dotabuff.com/items/gauntlets-of-strength/tooltip',
    name_loc: 'Gauntlets of Strength',
    price: '140',
    desc: {
      stats: ['+ 3 Strength'],
      lore: 'Studded leather gloves that add brute strength.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Bracer',
          icon: 'https://dotabuff.com/assets/items/bracer.jpg',
          cost: '505',
        },
        {
          title: 'Soul Ring',
          icon: 'https://dotabuff.com/assets/items/soul-ring.jpg',
          cost: '855',
        },
      ],
    },
  },
  {
    id: 133,
    name: 'divine-rapier',
    link: 'https://dotabuff.com/assets/items/divine-rapier.jpg',
    tooltip: 'https://dotabuff.com/items/divine-rapier/tooltip',
    name_loc: 'Divine Rapier',
    price: '5,600',
    desc: {
      passive:
        'Passive: Everlasting Dropped on death, and cannot be destroyed. Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier.',
      passive_desc:
        'Dropped on death, and cannot be destroyed. Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier.',
      stats: ['+ 350 Damage'],
      notes:
        'If Divine Rapier is dropped and picked up by an enemy of its original owner, it cannot be dropped again except by death.',
      lore: 'So powerful, it cannot have a single owner.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Demon Edge',
          icon: 'https://dotabuff.com/assets/items/demon-edge.jpg',
          cost: '2,200',
        },
        {
          title: 'Sacred Relic',
          icon: 'https://dotabuff.com/assets/items/sacred-relic.jpg',
          cost: '3,400',
        },
      ],
      basic_desc:
        'Passive: Everlasting Dropped on death, and cannot be destroyed. Becomes unusable if picked up by an ally of its owner until it is returned to its owner. It is immediately usable by anybody if an enemy of the owner picks it up and is killed. A dropped Rapier cannot be picked up by a courier.',
    },
  },
  {
    id: 94,
    name: 'headdress',
    link: 'https://dotabuff.com/assets/items/headdress.jpg',
    tooltip: 'https://dotabuff.com/items/headdress/tooltip',
    name_loc: 'Headdress',
    price: '425',
    desc: {
      passive:
        'Passive: Regeneration AuraGrants 2.0 health regeneration to allies.Radius: 1200',
      passive_desc: 'Grants 2.0 health regeneration to allies.Radius: 1200',
      stats: ['+ 0.5 Health Regeneration'],
      lore: 'Creates a soothing aura that restores allies in battle.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Mekansm',
          icon: 'https://dotabuff.com/assets/items/mekansm.jpg',
          cost: '1,775',
        },
        {
          title: 'Pipe of Insight',
          icon: 'https://dotabuff.com/assets/items/pipe-of-insight.jpg',
          cost: '3,375',
        },
        {
          title: 'Holy Locket',
          icon: 'https://dotabuff.com/assets/items/holy-locket.jpg',
          cost: '2,400',
        },
        {
          title: 'Witches Switch',
          icon: 'https://dotabuff.com/assets/items/witches-switch.jpg',
          cost: '1,900',
        },
      ],
      builds_from: [
        {
          title: 'Ring of Regen',
          icon: 'https://dotabuff.com/assets/items/ring-of-regen.jpg',
          cost: '175',
        },
        {
          title: 'Recipe: Headdress',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Passive: Regeneration AuraGrants 2.0 health regeneration to allies.Radius: 1200',
    },
  },
  {
    id: 331,
    name: 'vambrace',
    link: 'https://dotabuff.com/assets/items/vambrace.jpg',
    tooltip: 'https://dotabuff.com/items/vambrace/tooltip',
    name_loc: 'Vambrace',
    desc: {
      stats: ['+ 10 Main Vambrace Attribute', '+ 5 Other Attributes'],
      lore: 'The coveted treasure that divided the heirs of Queen Raiya upon her death, resulting in the eventual downfall of her kingdom.',
      basic_desc:
        "Also provides one of the following, based on the Vambrace's main attribute:",
    },
  },
  {
    id: 56,
    name: 'ring-of-health',
    link: 'https://dotabuff.com/assets/items/ring-of-health.jpg',
    tooltip: 'https://dotabuff.com/items/ring-of-health/tooltip',
    name_loc: 'Ring of Health',
    price: '700',
    desc: {
      stats: ['+ 5.25 Health Regeneration'],
      lore: "A shiny ring found beneath a fat halfling's corpse.",
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Perseverance',
          icon: 'https://dotabuff.com/assets/items/perseverance.jpg',
          cost: '1,400',
        },
        {
          title: 'Pipe of Insight',
          icon: 'https://dotabuff.com/assets/items/pipe-of-insight.jpg',
          cost: '3,375',
        },
        {
          title: 'Vanguard',
          icon: 'https://dotabuff.com/assets/items/vanguard.jpg',
          cost: '1,700',
        },
        {
          title: 'Eternal Shroud',
          icon: 'https://dotabuff.com/assets/items/eternal-shroud.jpg',
          cost: '3,300',
        },
      ],
    },
  },
  {
    id: 288,
    name: 'grove-bow',
    link: 'https://dotabuff.com/assets/items/grove-bow.jpg',
    tooltip: 'https://dotabuff.com/items/grove-bow/tooltip',
    name_loc: 'Grove Bow',
    desc: {
      passive:
        'Passive: Magic Amp Reduces magic resistance of the attacked enemy by 15%.',
      passive_desc: 'Reduces magic resistance of the attacked enemy by 15%.',
      lore: 'A gift from the moon goddess to one of her prized disciples many memories ago.',
      basic_desc:
        'Passive: Magic Amp Reduces magic resistance of the attacked enemy by 15%.',
    },
  },
  {
    id: 4,
    name: 'chainmail',
    link: 'https://dotabuff.com/assets/items/chainmail.jpg',
    tooltip: 'https://dotabuff.com/items/chainmail/tooltip',
    name_loc: 'Chainmail',
    price: '550',
    desc: {
      stats: ['+ 4 Armor'],
      lore: 'A medium weave of metal chains.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Phase Boots',
          icon: 'https://dotabuff.com/assets/items/phase-boots.jpg',
          cost: '1,500',
        },
        {
          title: 'Mekansm',
          icon: 'https://dotabuff.com/assets/items/mekansm.jpg',
          cost: '1,775',
        },
        {
          title: 'Blade Mail',
          icon: 'https://dotabuff.com/assets/items/blade-mail.jpg',
          cost: '2,100',
        },
        {
          title: 'Medallion of Courage',
          icon: 'https://dotabuff.com/assets/items/medallion-of-courage.jpg',
          cost: '1,025',
        },
        {
          title: 'Witch Blade',
          icon: 'https://dotabuff.com/assets/items/witch-blade.jpg',
          cost: '2,600',
        },
      ],
    },
  },
  {
    id: 187,
    name: 'medallion-of-courage',
    link: 'https://dotabuff.com/assets/items/medallion-of-courage.jpg',
    tooltip: 'https://dotabuff.com/items/medallion-of-courage/tooltip',
    name_loc: 'Medallion of Courage',
    price: '1,025',
    desc: {
      active_desc:
        'If cast on an ally, grants them the -6 armor, and removing it from the caster. If cast on an enemy, reduces -6 armor on both the enemy and the caster. Range: 1000Duration: 8',
      active: 'Active: Valor ',
      cooldown: '16',
      notes: 'Shares cooldown with Solar Crest.',
      dispellable: 'Dispellable.',
      lore: 'The bearer has no fear of combat.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Solar Crest',
          icon: 'https://dotabuff.com/assets/items/solar-crest.jpg',
          cost: '2,425',
        },
      ],
      builds_from: [
        {
          title: 'Chainmail',
          icon: 'https://dotabuff.com/assets/items/chainmail.jpg',
          cost: '550',
        },
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
        {
          title: 'Blight Stone',
          icon: 'https://dotabuff.com/assets/items/blight-stone.jpg',
          cost: '300',
        },
      ],
      basic_desc:
        'Active: Valor If cast on an ally, grants them the -6 armor, and removing it from the caster. If cast on an enemy, reduces -6 armor on both the enemy and the caster. Range: 1000Duration: 8',
    },
  },
  {
    id: 27,
    name: 'ring-of-regen',
    link: 'https://dotabuff.com/assets/items/ring-of-regen.jpg',
    tooltip: 'https://dotabuff.com/items/ring-of-regen/tooltip',
    name_loc: 'Ring of Regen',
    price: '175',
    desc: {
      stats: ['+ 1.25 Health Regeneration'],
      lore: 'This ring is considered a good luck charm among the Gnomes.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Headdress',
          icon: 'https://dotabuff.com/assets/items/headdress.jpg',
          cost: '425',
        },
        {
          title: 'Tranquil Boots',
          icon: 'https://dotabuff.com/assets/items/tranquil-boots.jpg',
          cost: '925',
        },
      ],
    },
  },
  {
    id: 67,
    name: 'oblivion-staff',
    link: 'https://dotabuff.com/assets/items/oblivion-staff.jpg',
    tooltip: 'https://dotabuff.com/items/oblivion-staff/tooltip',
    name_loc: 'Oblivion Staff',
    price: '1,500',
    desc: {
      stats: [
        '+ 15 Damage',
        '+ 10 Intelligence',
        '+ 10 Attack Speed',
        '+ 1.25 Mana Regeneration',
      ],
      lore: 'Deceptively hidden as an ordinary staff, it is actually very powerful, much like the Eldritch who originally possessed it.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Echo Sabre',
          icon: 'https://dotabuff.com/assets/items/echo-sabre.jpg',
          cost: '2,500',
        },
        {
          title: 'Mage Slayer',
          icon: 'https://dotabuff.com/assets/items/mage-slayer.jpg',
          cost: '2,500',
        },
      ],
      builds_from: [
        {
          title: 'Quarterstaff',
          icon: 'https://dotabuff.com/assets/items/quarterstaff.jpg',
          cost: '875',
        },
        {
          title: 'Robe of the Magi',
          icon: 'https://dotabuff.com/assets/items/robe-of-the-magi.jpg',
          cost: '450',
        },
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
      ],
    },
  },
  {
    id: 675,
    name: 'psychic-headband',
    link: 'https://dotabuff.com/assets/items/psychic-headband.jpg',
    tooltip: 'https://dotabuff.com/items/psychic-headband/tooltip',
    name_loc: 'Psychic Headband',
    desc: {
      active_desc: 'Pushes the target enemy unit away from you 400 distance.',
      active: 'Active: Psychic Push',
      cooldown: '20',
      lore: 'A failed experiment in finer telekinetic control, still fit for other ends.',
      basic_desc:
        'Active: Psychic PushPushes the target enemy unit away from you 400 distance.',
    },
  },
  {
    id: 10,
    name: 'quarterstaff',
    link: 'https://dotabuff.com/assets/items/quarterstaff.jpg',
    tooltip: 'https://dotabuff.com/items/quarterstaff/tooltip',
    name_loc: 'Quarterstaff',
    price: '875',
    desc: {
      stats: ['+ 10 Attack Speed', '+ 10 Damage'],
      lore: 'A basic staff that allows you to strike quickly.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Oblivion Staff',
          icon: 'https://dotabuff.com/assets/items/oblivion-staff.jpg',
          cost: '1,500',
        },
        {
          title: 'Butterfly',
          icon: 'https://dotabuff.com/assets/items/butterfly.jpg',
          cost: '4,975',
        },
        {
          title: 'Mask of Madness',
          icon: 'https://dotabuff.com/assets/items/mask-of-madness.jpg',
          cost: '1,775',
        },
      ],
    },
  },
  {
    id: 14,
    name: 'slippers-of-agility',
    link: 'https://dotabuff.com/assets/items/slippers-of-agility.jpg',
    tooltip: 'https://dotabuff.com/items/slippers-of-agility/tooltip',
    name_loc: 'Slippers of Agility',
    price: '140',
    desc: {
      stats: ['+ 3 Agility'],
      lore: 'Light boots made from spider skin that tingles your senses.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Wraith Band',
          icon: 'https://dotabuff.com/assets/items/wraith-band.jpg',
          cost: '505',
        },
      ],
    },
  },
  {
    id: 569,
    name: 'orb-of-corrosion',
    link: 'https://dotabuff.com/assets/items/orb-of-corrosion.jpg',
    tooltip: 'https://dotabuff.com/items/orb-of-corrosion/tooltip',
    name_loc: 'Orb of Corrosion',
    price: '925',
    desc: {
      passive:
        'Passive: CorrosionDealing 3 damage per second, reducing armor by 3, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged.Lasts for 3.0 seconds.',
      passive_desc:
        'Dealing 3 damage per second, reducing armor by 3, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged.Lasts for 3.0 seconds.',
      stats: ['+ 150 Health'],
      lore: "Seepage from the wounds of a warrior deity, sealed in an arcanist's orb following a campaign of vicious slaughter.",
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Orb of Venom',
          icon: 'https://dotabuff.com/assets/items/orb-of-venom.jpg',
          cost: '275',
        },
        {
          title: 'Blight Stone',
          icon: 'https://dotabuff.com/assets/items/blight-stone.jpg',
          cost: '300',
        },
        {
          title: 'Fluffy Hat',
          icon: 'https://dotabuff.com/assets/items/fluffy-hat.jpg',
          cost: '250',
        },
        {
          title: 'Recipe: Orb of Corrosion',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '100',
        },
      ],
      basic_desc:
        'Passive: CorrosionDealing 3 damage per second, reducing armor by 3, and slowing movement by 13% if the equipped hero is melee, or by 4% if they are ranged.Lasts for 3.0 seconds.',
    },
  },
  {
    id: 311,
    name: 'spell-prism',
    link: 'https://dotabuff.com/assets/items/spell-prism.jpg',
    tooltip: 'https://dotabuff.com/items/spell-prism/tooltip',
    name_loc: 'Spell Prism',
    desc: {
      passive:
        'Passive: Cooldown ReductionReduces the cooldown time of all spells and items.',
      passive_desc: 'Reduces the cooldown time of all spells and items.',
      lore: 'Even the slightest flaw in the components of a spell prism can result in the death of its user.',
      basic_desc:
        'Passive: Cooldown ReductionReduces the cooldown time of all spells and items.',
    },
  },
  {
    id: 104,
    name: 'dagon',
    link: 'https://dotabuff.com/assets/items/dagon.jpg',
    tooltip: 'https://dotabuff.com/items/dagon/tooltip',
    name_loc: 'Dagon',
    price: '2,850',
    desc: {
      active_desc:
        'Emits a powerful burst of magical damage upon a targeted enemy unit. Heals the caster 75% of damage dealt by Dagon. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
      active: 'Active: Energy Burst ',
      cooldown: '35 30 25 20 15',
      manacost: '120 140 160 180 200',
      notes: 'Instantly kills illusions.',
      lore: 'A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Dagon (level 2)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-2.jpg',
          cost: '4,000',
        },
      ],
      builds_from: [
        {
          title: 'Recipe: Dagon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,150',
        },
        {
          title: 'Voodoo Mask',
          icon: 'https://dotabuff.com/assets/items/voodoo-mask.jpg',
          cost: '700',
        },
        {
          title: 'Diadem',
          icon: 'https://dotabuff.com/assets/items/diadem.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Heals the caster 75% of damage dealt by Dagon. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
    },
  },
  {
    id: 573,
    name: 'elven-tunic',
    link: 'https://dotabuff.com/assets/items/elven-tunic.jpg',
    tooltip: 'https://dotabuff.com/items/elven-tunic/tooltip',
    name_loc: 'Elven Tunic',
    desc: {
      stats: ['+ 26 Attack Speed', '+ 16% Evasion', '+ 7% Movement Speed'],
      lore: 'Even simple items of elven make seem imbued with inexplicable efficacy.',
    },
  },
  {
    id: 358,
    name: 'dragon-scale',
    link: 'https://dotabuff.com/assets/items/dragon-scale.jpg',
    tooltip: 'https://dotabuff.com/items/dragon-scale/tooltip',
    name_loc: 'Dragon Scale',
    desc: {
      passive:
        'Passive: Afterburn Causes attacks to burn the enemy, dealing 18 damage per second for 3.0 seconds. Affects buildings.',
      passive_desc:
        'Causes attacks to burn the enemy, dealing 18 damage per second for 3.0 seconds. Affects buildings.',
      stats: ['+ 5 Armor', '+ 5 Health Regeneration'],
      lore: 'The remains of a dragon always outvalue the wealth of even the most prodigious hoard.',
      basic_desc:
        'Passive: Afterburn Causes attacks to burn the enemy, dealing 18 damage per second for 3.0 seconds. Affects buildings.',
    },
  },
  {
    id: 162,
    name: 'sange',
    link: 'https://dotabuff.com/assets/items/sange.jpg',
    tooltip: 'https://dotabuff.com/items/sange/tooltip',
    name_loc: 'Sange',
    price: '2,050',
    desc: {
      stats: [
        '+ 16 Strength',
        '+ 12% Status Resistance',
        '+ 20% Health Regen and Lifesteal Amp',
      ],
      lore: 'Sange is an unusually accurate weapon, seeking weak points automatically.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Sange and Yasha',
          icon: 'https://dotabuff.com/assets/items/sange-and-yasha.jpg',
          cost: '4,100',
        },
        {
          title: "Heaven's Halberd",
          icon: 'https://dotabuff.com/assets/items/heavens-halberd.jpg',
          cost: '3,550',
        },
        {
          title: 'Kaya and Sange',
          icon: 'https://dotabuff.com/assets/items/kaya-and-sange.jpg',
          cost: '4,100',
        },
        {
          title: 'Trident',
          icon: 'https://dotabuff.com/assets/items/trident.jpg',
          cost: '6,151',
        },
      ],
      builds_from: [
        {
          title: 'Belt of Strength',
          icon: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
          cost: '450',
        },
        {
          title: 'Ogre Axe',
          icon: 'https://dotabuff.com/assets/items/ogre-axe.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Sange',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '600',
        },
      ],
    },
  },
  {
    id: 359,
    name: 'essence-ring',
    link: 'https://dotabuff.com/assets/items/essence-ring.jpg',
    tooltip: 'https://dotabuff.com/items/essence-ring/tooltip',
    name_loc: 'Essence Ring',
    desc: {
      active_desc:
        'Increases your current and max health by 400 for 15 seconds.',
      active: 'Active: Life Essence ',
      cooldown: '25',
      manacost: '200',
      lore: 'An ancient bauble blessed by the breath of Verodicia.',
      basic_desc:
        'Active: Life Essence Increases your current and max health by 400 for 15 seconds.',
    },
  },
  {
    id: 215,
    name: 'shadow-amulet',
    link: 'https://dotabuff.com/assets/items/shadow-amulet.jpg',
    tooltip: 'https://dotabuff.com/items/shadow-amulet/tooltip',
    name_loc: 'Shadow Amulet',
    price: '1,000',
    desc: {
      active_desc:
        'Grants invisibility to you or a target allied hero as long as the target unit remains still for up to 15s.  Has a 1.25 second fade time, and breaks instantly upon moving. There is no cooldown when using this item on yourself.Range: 600',
      active: 'Active: Fade',
      cooldown: '7',
      lore: "A small talisman that clouds the senses of one's enemies when held perfectly still.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Shadow Blade',
          icon: 'https://dotabuff.com/assets/items/shadow-blade.jpg',
          cost: '3,000',
        },
        {
          title: 'Glimmer Cape',
          icon: 'https://dotabuff.com/assets/items/glimmer-cape.jpg',
          cost: '2,150',
        },
      ],
      basic_desc:
        'Active: FadeGrants invisibility to you or a target allied hero as long as the target unit remains still for up to 15s.  Has a 1.25 second fade time, and breaks instantly upon moving. There is no cooldown when using this item on yourself.Range: 600',
    },
  },
  {
    id: 20,
    name: 'circlet',
    link: 'https://dotabuff.com/assets/items/circlet.jpg',
    tooltip: 'https://dotabuff.com/items/circlet/tooltip',
    name_loc: 'Circlet',
    price: '155',
    desc: {
      stats: ['+ 2 All Attributes'],
      lore: 'An elegant circlet designed for human princesses.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Bracer',
          icon: 'https://dotabuff.com/assets/items/bracer.jpg',
          cost: '505',
        },
        {
          title: 'Wraith Band',
          icon: 'https://dotabuff.com/assets/items/wraith-band.jpg',
          cost: '505',
        },
        {
          title: 'Null Talisman',
          icon: 'https://dotabuff.com/assets/items/null-talisman.jpg',
          cost: '505',
        },
        {
          title: 'Urn of Shadows',
          icon: 'https://dotabuff.com/assets/items/urn-of-shadows.jpg',
          cost: '880',
        },
      ],
    },
  },
  {
    id: 143,
    name: 'necronomicon-level-3',
    link: 'https://dotabuff.com/assets/items/necronomicon-level-3.jpg',
    tooltip: 'https://dotabuff.com/items/necronomicon-level-3/tooltip',
    name_loc: 'Necronomicon (level 3)',
    price: '4,550',
    desc: {
      active_desc:
        'Summons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 800 / 1200 / 1600Damage: 25 / 45 / 65Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 800 / 1200 / 1600Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200',
      active: 'Active: Demonic Summoning',
      cooldown: '80',
      manacost: '150',
      stats: ['+ 6 / 12 / 18 Strength', '+ 2.0 / 3.0 / 4.0 Mana Regeneration'],
      lore: 'Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Recipe: Necronomicon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,250',
        },
        {
          title: 'Necronomicon (level 2)',
          icon: 'https://dotabuff.com/assets/items/necronomicon-level-2.jpg',
          cost: '3,300',
        },
      ],
      basic_desc:
        'Active: Demonic SummoningSummons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 800 / 1200 / 1600Damage: 25 / 45 / 65Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 800 / 1200 / 1600Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200',
    },
  },
  {
    id: 326,
    name: 'spider-legs',
    link: 'https://dotabuff.com/assets/items/spider-legs.jpg',
    tooltip: 'https://dotabuff.com/items/spider-legs/tooltip',
    name_loc: 'Spider Legs',
    desc: {
      active_desc:
        'Grants you 18% bonus movement speed and free pathing for 3.5 seconds. Walking over trees causes them to be destroyed.',
      active: 'Active: Skitter ',
      cooldown: '12',
      lore: 'A horrifying yet useful mixture of necromancy and artificing.',
      basic_desc:
        'Active: Skitter Grants you 18% bonus movement speed and free pathing for 3.5 seconds. Walking over trees causes them to be destroyed.',
    },
  },
  {
    id: 574,
    name: 'cloak-of-flames',
    link: 'https://dotabuff.com/assets/items/cloak-of-flames.jpg',
    tooltip: 'https://dotabuff.com/items/cloak-of-flames/tooltip',
    name_loc: 'Cloak of Flames',
    desc: {
      passive:
        'Passive: ImmolateBurns enemy units for 45 damage per second. Illusions deal 30 damage per second.Radius: 375',
      passive_desc:
        'Burns enemy units for 45 damage per second. Illusions deal 30 damage per second.Radius: 375',
      stats: ['+ 4 Armor', '+ 10% Magic Resistance'],
      lore: 'A very fine cloak that plays host to an overly-protective living flame.',
      basic_desc:
        'Passive: ImmolateBurns enemy units for 45 damage per second. Illusions deal 30 damage per second.Radius: 375',
    },
  },
  {
    id: 287,
    name: 'keen-optic',
    link: 'https://dotabuff.com/assets/items/keen-optic.jpg',
    tooltip: 'https://dotabuff.com/items/keen-optic/tooltip',
    name_loc: 'Keen Optic',
    desc: {
      stats: ['+ 75 Cast Range', '+ 1.25 Mana Regeneration'],
      lore: "Stolen from a tinker's shop ages ago, this handy lens has seen service to many owners.",
    },
  },
  {
    id: 52,
    name: 'eaglesong',
    link: 'https://dotabuff.com/assets/items/eaglesong.jpg',
    tooltip: 'https://dotabuff.com/items/eaglesong/tooltip',
    name_loc: 'Eaglesong',
    price: '2,800',
    desc: {
      stats: ['+ 25 Agility'],
      lore: 'Capturing the majestic call of an eagle, this mystical horn brings limitless dexterity to those who hear it.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Butterfly',
          icon: 'https://dotabuff.com/assets/items/butterfly.jpg',
          cost: '4,975',
        },
        {
          title: 'Swift Blink',
          icon: 'https://dotabuff.com/assets/items/swift-blink.jpg',
          cost: '6,800',
        },
        {
          title: 'Hermes Sandals',
          icon: 'https://dotabuff.com/assets/items/hermes-sandals.jpg',
          cost: '4,800',
        },
      ],
    },
  },
  {
    id: 306,
    name: 'pupils-gift',
    link: 'https://dotabuff.com/assets/items/pupils-gift.jpg',
    tooltip: 'https://dotabuff.com/items/pupils-gift/tooltip',
    name_loc: "Pupil's Gift",
    desc: {
      notes: 'Grants half value to each attribute for Universal Heroes',
      lore: 'An astounding plate of ever-replenishing, fortifying fruit.',
      basic_desc: 'Increases both non-primary attributes.',
    },
  },
  {
    id: 361,
    name: 'enchanted-quiver',
    link: 'https://dotabuff.com/assets/items/enchanted-quiver.jpg',
    tooltip: 'https://dotabuff.com/items/enchanted-quiver/tooltip',
    name_loc: 'Enchanted Quiver',
    desc: {
      passive:
        'Passive: Certain Strike Empowers your next attack with 225 bonus magical damage and True Strike. Ranged Attackers have +350 bonus range for the attack.',
      passive_desc:
        'Empowers your next attack with 225 bonus magical damage and True Strike. Ranged Attackers have +350 bonus range for the attack.',
      cooldown: '4',
      lore: 'A graceful gift blessed by the goddess of the hunt.',
      basic_desc:
        'Passive: Certain Strike Empowers your next attack with 225 bonus magical damage and True Strike. Ranged Attackers have +350 bonus range for the attack.',
    },
  },
  {
    id: 300,
    name: 'timeless-relic',
    link: 'https://dotabuff.com/assets/items/timeless-relic.jpg',
    tooltip: 'https://dotabuff.com/items/timeless-relic/tooltip',
    name_loc: 'Timeless Relic',
    desc: {
      lore: "An unmarred discovery from the excavated ruins of an ancient wizard's academy.",
      basic_desc: 'Increases all outgoing spell damage and debuff duration.',
    },
  },
  {
    id: 28,
    name: 'sages-mask',
    link: 'https://dotabuff.com/assets/items/sages-mask.jpg',
    tooltip: 'https://dotabuff.com/items/sages-mask/tooltip',
    name_loc: "Sage's Mask",
    price: '175',
    desc: {
      stats: ['+ 0.7 Mana Regeneration'],
      lore: 'A mask commonly used by mages and warlocks for various rituals.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Oblivion Staff',
          icon: 'https://dotabuff.com/assets/items/oblivion-staff.jpg',
          cost: '1,500',
        },
        {
          title: 'Ring of Basilius',
          icon: 'https://dotabuff.com/assets/items/ring-of-basilius.jpg',
          cost: '425',
        },
        {
          title: 'Urn of Shadows',
          icon: 'https://dotabuff.com/assets/items/urn-of-shadows.jpg',
          cost: '880',
        },
        {
          title: 'Medallion of Courage',
          icon: 'https://dotabuff.com/assets/items/medallion-of-courage.jpg',
          cost: '1,025',
        },
        {
          title: 'Falcon Blade',
          icon: 'https://dotabuff.com/assets/items/falcon-blade.jpg',
          cost: '1,125',
        },
      ],
    },
  },
  {
    id: 17,
    name: 'belt-of-strength',
    link: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
    tooltip: 'https://dotabuff.com/items/belt-of-strength/tooltip',
    name_loc: 'Belt of Strength',
    price: '450',
    desc: {
      stats: ['+ 6 Strength'],
      lore: 'A valued accessory for improving vitality.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Power Treads',
          icon: 'https://dotabuff.com/assets/items/power-treads.jpg',
          cost: '1,400',
        },
        {
          title: 'Skull Basher',
          icon: 'https://dotabuff.com/assets/items/skull-basher.jpg',
          cost: '2,875',
        },
        {
          title: 'Sange',
          icon: 'https://dotabuff.com/assets/items/sange.jpg',
          cost: '2,050',
        },
        {
          title: 'Drum of Endurance',
          icon: 'https://dotabuff.com/assets/items/drum-of-endurance.jpg',
          cost: '1,650',
        },
        {
          title: 'Dragon Lance',
          icon: 'https://dotabuff.com/assets/items/dragon-lance.jpg',
          cost: '1,900',
        },
        {
          title: 'Samurai Tabi',
          icon: 'https://dotabuff.com/assets/items/samurai-tabi.jpg',
          cost: '4,500',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'broadsword',
    link: 'https://dotabuff.com/assets/items/broadsword.jpg',
    tooltip: 'https://dotabuff.com/items/broadsword/tooltip',
    name_loc: 'Broadsword',
    price: '1,000',
    desc: {
      stats: ['+ 15 Damage'],
      lore: 'The classic weapon of choice for knights, this blade is sturdy and reliable for slaying enemies.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Blade Mail',
          icon: 'https://dotabuff.com/assets/items/blade-mail.jpg',
          cost: '2,100',
        },
        {
          title: 'Battle Fury',
          icon: 'https://dotabuff.com/assets/items/battle-fury.jpg',
          cost: '4,100',
        },
        {
          title: 'Crystalys',
          icon: 'https://dotabuff.com/assets/items/crystalys.jpg',
          cost: '1,950',
        },
        {
          title: 'Shadow Blade',
          icon: 'https://dotabuff.com/assets/items/shadow-blade.jpg',
          cost: '3,000',
        },
      ],
    },
  },
  {
    id: 31,
    name: 'cloak',
    link: 'https://dotabuff.com/assets/items/cloak.jpg',
    tooltip: 'https://dotabuff.com/items/cloak/tooltip',
    name_loc: 'Cloak',
    price: '800',
    desc: {
      stats: ['+ 20% Magic Resistance'],
      notes: 'Stacks multiplicatively with other sources of spell resistance.',
      lore: 'A cloak made of a magical material that works to dispel any magic cast on it.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Pipe of Insight',
          icon: 'https://dotabuff.com/assets/items/pipe-of-insight.jpg',
          cost: '3,375',
        },
        {
          title: 'Glimmer Cape',
          icon: 'https://dotabuff.com/assets/items/glimmer-cape.jpg',
          cost: '2,150',
        },
        {
          title: 'Mage Slayer',
          icon: 'https://dotabuff.com/assets/items/mage-slayer.jpg',
          cost: '2,500',
        },
        {
          title: 'Eternal Shroud',
          icon: 'https://dotabuff.com/assets/items/eternal-shroud.jpg',
          cost: '3,300',
        },
        {
          title: 'Lunar Crest',
          icon: 'https://dotabuff.com/assets/items/lunar-crest.jpg',
          cost: '2,300',
        },
      ],
    },
  },
  {
    id: 357,
    name: 'nether-shawl',
    link: 'https://dotabuff.com/assets/items/nether-shawl.jpg',
    tooltip: 'https://dotabuff.com/items/nether-shawl/tooltip',
    name_loc: 'Nether Shawl',
    desc: {
      stats: ['+ 20% Magic Resistance', '+ 6% Spell Damage', ' 2 -Armor'],
      lore: 'An otherworldly garment tethered to our plane by unknown means.',
    },
  },
  {
    id: 1466,
    name: 'gleipnir',
    link: 'https://dotabuff.com/assets/items/gleipnir.jpg',
    tooltip: 'https://dotabuff.com/items/gleipnir/tooltip',
    name_loc: 'Gleipnir',
    price: '6,150',
    desc: {
      active_desc:
        'Roots all enemies in a target 375 radius for 2.0 seconds and deals 180 damage.Range: 1100',
      active: 'Active: Eternal Chains ',
      passive:
        'Passive: Chain LightningGrants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 160 magical damage to each. Lightning proc pierces evasion.',
      passive_desc:
        'Grants a 30% chance on attack to release a bolt of electricity that leaps between 4 targets within a 650 radius, dealing 160 magical damage to each. Lightning proc pierces evasion.',
      cooldown: '18',
      manacost: '200',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'Bindings forged by impossible means to leash an ancient evil.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Maelstrom',
          icon: 'https://dotabuff.com/assets/items/maelstrom.jpg',
          cost: '2,700',
        },
        {
          title: 'Rod of Atos',
          icon: 'https://dotabuff.com/assets/items/rod-of-atos.jpg',
          cost: '2,750',
        },
        {
          title: 'Recipe: Gleipnir',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '700',
        },
      ],
      basic_desc:
        'Active: Eternal ChainsRoots all enemies in a target 375 radius for 2.0 seconds and deals 180 damage.Range: 1100 ',
    },
  },
  {
    id: 336,
    name: 'telescope',
    link: 'https://dotabuff.com/assets/items/telescope.jpg',
    tooltip: 'https://dotabuff.com/items/telescope/tooltip',
    name_loc: 'Telescope',
    desc: {
      passive:
        'Passive: Prescient Aura Lowers Scan cooldown by 50% . Increases attack range (Ranged only) and cast range of allies in a 1200 unit radius.',
      passive_desc:
        'Lowers Scan cooldown by 50% . Increases attack range (Ranged only) and cast range of allies in a 1200 unit radius.',
      lore: 'A handy tool that manages to make close what once was far.',
      basic_desc:
        'Passive: Prescient Aura Lowers Scan cooldown by 50% . Increases attack range (Ranged only) and cast range of allies in a 1200 unit radius.',
    },
  },
  {
    id: 86,
    name: 'buckler',
    link: 'https://dotabuff.com/assets/items/buckler.jpg',
    tooltip: 'https://dotabuff.com/items/buckler/tooltip',
    name_loc: 'Buckler',
    price: '425',
    desc: {
      passive:
        'Passive: Buckler Aura Grants 2.0 armor to allied player units.Radius: 1200',
      passive_desc: 'Grants 2.0 armor to allied player units.Radius: 1200',
      stats: ['+ 1.0 Armor'],
      lore: 'A powerful shield that imbues the bearer with the strength of heroes past, it is capable of protecting entire armies in battle.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
          cost: '2,450',
        },
        {
          title: 'Assault Cuirass',
          icon: 'https://dotabuff.com/assets/items/assault-cuirass.jpg',
          cost: '5,125',
        },
        {
          title: 'Guardian Greaves',
          icon: 'https://dotabuff.com/assets/items/guardian-greaves.jpg',
          cost: '4,950',
        },
        {
          title: 'Witches Switch',
          icon: 'https://dotabuff.com/assets/items/witches-switch.jpg',
          cost: '1,900',
        },
      ],
      builds_from: [
        {
          title: 'Ring of Protection',
          icon: 'https://dotabuff.com/assets/items/ring-of-protection.jpg',
          cost: '175',
        },
        {
          title: 'Recipe: Buckler',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '250',
        },
      ],
      basic_desc:
        'Passive: Buckler Aura Grants 2.0 armor to allied player units.Radius: 1200',
    },
  },
  {
    id: 32,
    name: 'talisman-of-evasion',
    link: 'https://dotabuff.com/assets/items/talisman-of-evasion.jpg',
    tooltip: 'https://dotabuff.com/items/talisman-of-evasion/tooltip',
    name_loc: 'Talisman of Evasion',
    price: '1,300',
    desc: {
      stats: ['+ 15% Evasion'],
      notes: 'Stacks diminishingly with other sources of Evasion.',
      lore: 'A necklace that allows you to anticipate enemy attacks.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Radiance',
          icon: 'https://dotabuff.com/assets/items/radiance.jpg',
          cost: '4,700',
        },
        {
          title: 'Butterfly',
          icon: 'https://dotabuff.com/assets/items/butterfly.jpg',
          cost: '4,975',
        },
        {
          title: "Heaven's Halberd",
          icon: 'https://dotabuff.com/assets/items/heavens-halberd.jpg',
          cost: '3,550',
        },
      ],
    },
  },
  {
    id: 5,
    name: 'claymore',
    link: 'https://dotabuff.com/assets/items/claymore.jpg',
    tooltip: 'https://dotabuff.com/items/claymore/tooltip',
    name_loc: 'Claymore',
    price: '1,350',
    desc: {
      stats: ['+ 20 Damage'],
      lore: "A sword that can cut through armor, it's a commonly chosen first weapon for budding swordsmen.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Battle Fury',
          icon: 'https://dotabuff.com/assets/items/battle-fury.jpg',
          cost: '4,100',
        },
        {
          title: 'Satanic',
          icon: 'https://dotabuff.com/assets/items/satanic.jpg',
          cost: '5,050',
        },
      ],
    },
  },
  {
    id: 349,
    name: 'arcane-ring',
    link: 'https://dotabuff.com/assets/items/arcane-ring.jpg',
    tooltip: 'https://dotabuff.com/items/arcane-ring/tooltip',
    name_loc: 'Arcane Ring',
    desc: {
      active_desc: 'Restores 75 mana to all nearby allies.  Radius: 1200',
      active: 'Active: Replenish Mana ',
      cooldown: '45',
      lore: "Once a prized heirloom of a minor lord's house.",
      basic_desc:
        'Active: Replenish Mana Restores 75 mana to all nearby allies.  Radius: 1200',
    },
  },
  {
    id: 25,
    name: 'gloves-of-haste',
    link: 'https://dotabuff.com/assets/items/gloves-of-haste.jpg',
    tooltip: 'https://dotabuff.com/items/gloves-of-haste/tooltip',
    name_loc: 'Gloves of Haste',
    price: '450',
    desc: {
      lore: 'A pair of magical gloves that seems to render weapons weightless.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Power Treads',
          icon: 'https://dotabuff.com/assets/items/power-treads.jpg',
          cost: '1,400',
        },
        {
          title: 'Hand of Midas',
          icon: 'https://dotabuff.com/assets/items/hand-of-midas.jpg',
          cost: '2,200',
        },
        {
          title: 'Armlet of Mordiggian',
          icon: 'https://dotabuff.com/assets/items/armlet-of-mordiggian.jpg',
          cost: '2,500',
        },
      ],
    },
  },
  {
    id: 362,
    name: 'ninja-gear',
    link: 'https://dotabuff.com/assets/items/ninja-gear.jpg',
    tooltip: 'https://dotabuff.com/items/ninja-gear/tooltip',
    name_loc: 'Ninja Gear',
    desc: {
      active_desc: 'Casts Smoke of Deceit on yourself only.',
      active: 'Active: Solitary Disguise ',
      cooldown: '45',
      lore: 'Valuable equipment recovered by a young explorer sifting through the flotsam and detritus drifting in the void.',
      basic_desc:
        'Active: Solitary Disguise Casts Smoke of Deceit on yourself only.',
    },
  },
  {
    id: 379,
    name: 'the-leveller',
    link: 'https://dotabuff.com/assets/items/the-leveller.jpg',
    tooltip: 'https://dotabuff.com/items/the-leveller/tooltip',
    name_loc: 'The Leveller',
    desc: {
      lore: 'A demonic blade that struck the final blow to crack the gates of the Sanctum of Solanas.',
    },
  },
  {
    id: 273,
    name: 'kaya-and-sange',
    link: 'https://dotabuff.com/assets/items/kaya-and-sange.jpg',
    tooltip: 'https://dotabuff.com/items/kaya-and-sange/tooltip',
    name_loc: 'Kaya and Sange',
    price: '4,100',
    desc: {
      lore: "Two of three known items of unimaginable power that many believe were crafted at the same enchanter's forge.",
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Sange',
          icon: 'https://dotabuff.com/assets/items/sange.jpg',
          cost: '2,050',
        },
        {
          title: 'Kaya',
          icon: 'https://dotabuff.com/assets/items/kaya.jpg',
          cost: '2,050',
        },
      ],
    },
  },
  {
    id: 356,
    name: 'trusty-shovel',
    link: 'https://dotabuff.com/assets/items/trusty-shovel.jpg',
    tooltip: 'https://dotabuff.com/items/trusty-shovel/tooltip',
    name_loc: 'Trusty Shovel',
    desc: {
      active_desc:
        'Channel for 1 second. Can find a Bounty Rune, a Flask, an Enchanted Mango, or an enemy Kobold.',
      active: 'Active: Dig ',
      cooldown: '50',
      notes:
        '%chance_bounty_rune%%% chance for a Bounty Rune.%chance_other_item%%% chance each for a Flask, an Enchanted Mango, or an enemy kobold.The same Trusty Shovel cannot find the same reward twice in a row.',
      lore: 'Former plaything of a young deity, received as a gift from his uncle.',
      basic_desc:
        'Active: Dig Channel for 1 second. Can find a Bounty Rune, a Flask, an Enchanted Mango, or an enemy Kobold.',
    },
  },
  {
    id: 12,
    name: 'ring-of-protection',
    link: 'https://dotabuff.com/assets/items/ring-of-protection.jpg',
    tooltip: 'https://dotabuff.com/items/ring-of-protection/tooltip',
    name_loc: 'Ring of Protection',
    price: '175',
    desc: {
      stats: ['+ 2.0 Armor'],
      lore: 'A glimmering ring that defends its bearer.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Buckler',
          icon: 'https://dotabuff.com/assets/items/buckler.jpg',
          cost: '425',
        },
        {
          title: 'Urn of Shadows',
          icon: 'https://dotabuff.com/assets/items/urn-of-shadows.jpg',
          cost: '880',
        },
        {
          title: 'Soul Ring',
          icon: 'https://dotabuff.com/assets/items/soul-ring.jpg',
          cost: '855',
        },
        {
          title: 'Pavise',
          icon: 'https://dotabuff.com/assets/items/pavise.jpg',
          cost: '1,400',
        },
      ],
    },
  },
  {
    id: 239,
    name: 'iron-talon',
    link: 'https://dotabuff.com/assets/items/iron-talon.jpg',
    tooltip: 'https://dotabuff.com/items/iron-talon/tooltip',
    name_loc: 'Iron Talon',
    desc: {
      active_desc:
        'Targets a non-player enemy unit to remove 40% of its current HP.If cast on a tree, instantly destroys it.Unit Range: 350Tree Range: 350',
      active: 'Active: Chop',
      cooldown: '25',
      stats: ['+ 15 Attack Speed', '+ 2.0 Armor'],
      notes: 'Has a 4 second cooldown on Trees.',
      lore: 'A simple but effective weapon devised to quell a great Hellbear uprising.',
      basic_desc:
        'Active: ChopTargets a non-player enemy unit to remove 40% of its current HP.If cast on a tree, instantly destroys it.Unit Range: 350Tree Range: 350',
    },
  },
  {
    id: 223,
    name: 'meteor-hammer',
    link: 'https://dotabuff.com/assets/items/meteor-hammer.jpg',
    tooltip: 'https://dotabuff.com/items/meteor-hammer/tooltip',
    name_loc: 'Meteor Hammer',
    price: '2,400',
    desc: {
      active_desc:
        'CHANNELED - After a successful channel, summons a meteor that strikes a 400 AoE, stunning enemies for 0.5 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds. Non-building units are also slowed for 20% for the duration of the burn. Building Impact Damage: 95 Building Over Time Damage: 60 Non-Building Impact Damage: 150 Non-Building Over Time Damage: 60 Channel Duration: 2 seconds.Landing Time: .5 seconds.',
      active: 'Active: Meteor Hammer ',
      cooldown: '24',
      manacost: '100',
      lore: 'An enchanted hammer forged of metals discovered in the ruins of a village destroyed by a great star storm.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Perseverance',
          icon: 'https://dotabuff.com/assets/items/perseverance.jpg',
          cost: '1,400',
        },
        {
          title: 'Recipe: Meteor Hammer',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '550',
        },
        {
          title: 'Crown',
          icon: 'https://dotabuff.com/assets/items/crown.jpg',
          cost: '450',
        },
      ],
      basic_desc:
        'Active: Meteor Hammer CHANNELED - After a successful channel, summons a meteor that strikes a 400 AoE, stunning enemies for 0.5 seconds and dealing impact damage. Continues to deal damage over time to enemies units and buildings for 6 seconds. Non-building units are also slowed for 20% for the duration of the burn. Building Impact Damage: 95 Building Over Time Damage: 60 Non-Building Impact Damage: 150 Non-Building Over Time Damage: 60 Channel Duration: 2 seconds.Landing Time: .5 seconds.',
    },
  },
  {
    id: 638,
    name: 'penta-edged-sword',
    link: 'https://dotabuff.com/assets/items/penta-edged-sword.jpg',
    tooltip: 'https://dotabuff.com/items/penta-edged-sword/tooltip',
    name_loc: 'Penta-Edged Sword',
    desc: {
      passive:
        'Passive: MaimEach attack has a 25% chance to reduce enemy hero movement speed by 20% and attack speed by 60 for 3.0 seconds.',
      passive_desc:
        'Each attack has a 25% chance to reduce enemy hero movement speed by 20% and attack speed by 60 for 3.0 seconds.',
      stats: ['+ 45 Damage', '+ 100 Attack Range (Melee Only)'],
      lore: 'The final, twisted work of a severely pious blacksmith, completed immediately before the taking of his own life. ',
      basic_desc:
        'Passive: MaimEach attack has a 25% chance to reduce enemy hero movement speed by 20% and attack speed by 60 for 3.0 seconds.',
    },
  },
  {
    id: 589,
    name: 'fairys-trinket',
    link: 'https://dotabuff.com/assets/items/fairys-trinket.jpg',
    tooltip: 'https://dotabuff.com/items/fairys-trinket/tooltip',
    name_loc: "Fairy's Trinket",
    desc: {
      cooldown: '8',
      stats: ['+ 75 Health', '+ 5% Spell Damage', '+ 5% Manacost Reduction'],
      lore: 'A small token imbued with the fortune of the fae in recognition of an intriguing display of mortal kindness.',
    },
  },
  {
    id: 676,
    name: 'ceremonial-robe',
    link: 'https://dotabuff.com/assets/items/ceremonial-robe.jpg',
    tooltip: 'https://dotabuff.com/items/ceremonial-robe/tooltip',
    name_loc: 'Ceremonial Robe',
    desc: {
      passive:
        'Passive: Ceremonial AuraLowers enemy Status Resistance by 10% and Magic Resistance by 10%.Radius: 1200',
      passive_desc:
        'Lowers enemy Status Resistance by 10% and Magic Resistance by 10%.Radius: 1200',
      lore: "One of many items lost in the looting of Zelenwyr's sacred reliquary.",
      basic_desc:
        'Passive: Ceremonial AuraLowers enemy Status Resistance by 10% and Magic Resistance by 10%.Radius: 1200',
    },
  },
  {
    id: 129,
    name: 'soul-booster',
    link: 'https://dotabuff.com/assets/items/soul-booster.jpg',
    tooltip: 'https://dotabuff.com/items/soul-booster/tooltip',
    name_loc: 'Soul Booster',
    price: '3,000',
    desc: {
      stats: ['+ 425 Health', '+ 425 Mana'],
      lore: 'Regain lost courage.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Bloodstone',
          icon: 'https://dotabuff.com/assets/items/bloodstone.jpg',
          cost: '4,400',
        },
        {
          title: 'Octarine Core',
          icon: 'https://dotabuff.com/assets/items/octarine-core.jpg',
          cost: '4,600',
        },
      ],
      builds_from: [
        {
          title: 'Energy Booster',
          icon: 'https://dotabuff.com/assets/items/energy-booster.jpg',
          cost: '800',
        },
        {
          title: 'Point Booster',
          icon: 'https://dotabuff.com/assets/items/point-booster.jpg',
          cost: '1,200',
        },
        {
          title: 'Vitality Booster',
          icon: 'https://dotabuff.com/assets/items/vitality-booster.jpg',
          cost: '1,000',
        },
      ],
    },
  },
  {
    id: 19,
    name: 'robe-of-the-magi',
    link: 'https://dotabuff.com/assets/items/robe-of-the-magi.jpg',
    tooltip: 'https://dotabuff.com/items/robe-of-the-magi/tooltip',
    name_loc: 'Robe of the Magi',
    price: '450',
    desc: {
      stats: ['+ 6 Intelligence'],
      lore: 'This robe corrupts the soul of the user, but provides wisdom in return.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Oblivion Staff',
          icon: 'https://dotabuff.com/assets/items/oblivion-staff.jpg',
          cost: '1,500',
        },
        {
          title: 'Diffusal Blade',
          icon: 'https://dotabuff.com/assets/items/diffusal-blade.jpg',
          cost: '2,500',
        },
        {
          title: 'Drum of Endurance',
          icon: 'https://dotabuff.com/assets/items/drum-of-endurance.jpg',
          cost: '1,650',
        },
        {
          title: 'Kaya',
          icon: 'https://dotabuff.com/assets/items/kaya.jpg',
          cost: '2,050',
        },
        {
          title: 'Witch Blade',
          icon: 'https://dotabuff.com/assets/items/witch-blade.jpg',
          cost: '2,600',
        },
        {
          title: 'Samurai Tabi',
          icon: 'https://dotabuff.com/assets/items/samurai-tabi.jpg',
          cost: '4,500',
        },
      ],
    },
  },
  {
    id: 571,
    name: 'trickster-cloak',
    link: 'https://dotabuff.com/assets/items/trickster-cloak.jpg',
    tooltip: 'https://dotabuff.com/items/trickster-cloak/tooltip',
    name_loc: 'Trickster Cloak',
    desc: {
      active_desc: 'Causes you to become invisible for 6.0 seconds.',
      active: 'Active: Cloak',
      cooldown: '25',
      stats: ['+ 20% Magic Resistance', '+ 20% Evasion'],
      lore: 'A fantastic garment immediately misplaced by its creator upon completion.',
      basic_desc:
        'Active: CloakCauses you to become invisible for 6.0 seconds.',
    },
  },
  {
    id: 534,
    name: 'witch-blade',
    link: 'https://dotabuff.com/assets/items/witch-blade.jpg',
    tooltip: 'https://dotabuff.com/items/witch-blade/tooltip',
    name_loc: 'Witch Blade',
    price: '2,600',
    desc: {
      passive:
        'Passive: Witch BladeCauses your next attack to apply a poison for 4.0 seconds, slowing by 25% and dealing 0.75x your intelligence as damage every second. This attack has True Strike.',
      passive_desc:
        'Causes your next attack to apply a poison for 4.0 seconds, slowing by 25% and dealing 0.75x your intelligence as damage every second. This attack has True Strike.',
      cooldown: '9',
      stats: [
        '+ 35 Attack Speed',
        '+ 12 Intelligence',
        '+ 6 Armor',
        '+ 300 Projectile Speed',
      ],
      lore: 'A spiteful blade inadvertently possessed by the soul of its incautious creator.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: "Revenant's Brooch",
          icon: 'https://dotabuff.com/assets/items/revenants-brooch.jpg',
          cost: '6,200',
        },
      ],
      builds_from: [
        {
          title: 'Chainmail',
          icon: 'https://dotabuff.com/assets/items/chainmail.jpg',
          cost: '550',
        },
        {
          title: 'Robe of the Magi',
          icon: 'https://dotabuff.com/assets/items/robe-of-the-magi.jpg',
          cost: '450',
        },
        {
          title: 'Blitz Knuckles',
          icon: 'https://dotabuff.com/assets/items/blitz-knuckles.jpg',
          cost: '1,000',
        },
        {
          title: 'Recipe: Witch Blade',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '600',
        },
      ],
      basic_desc:
        'Passive: Witch BladeCauses your next attack to apply a poison for 4.0 seconds, slowing by 25% and dealing 0.75x your intelligence as damage every second. This attack has True Strike.',
    },
  },
  {
    id: 59,
    name: 'energy-booster',
    link: 'https://dotabuff.com/assets/items/energy-booster.jpg',
    tooltip: 'https://dotabuff.com/items/energy-booster/tooltip',
    name_loc: 'Energy Booster',
    price: '800',
    desc: {
      stats: ['+ 250 Mana'],
      lore: 'This lapis gemstone is commonly added to the collection of wizards seeking to improve their presence in combat.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Soul Booster',
          icon: 'https://dotabuff.com/assets/items/soul-booster.jpg',
          cost: '3,000',
        },
        {
          title: 'Arcane Boots',
          icon: 'https://dotabuff.com/assets/items/arcane-boots.jpg',
          cost: '1,300',
        },
        {
          title: 'Lotus Orb',
          icon: 'https://dotabuff.com/assets/items/lotus-orb.jpg',
          cost: '3,850',
        },
        {
          title: 'Aether Lens',
          icon: 'https://dotabuff.com/assets/items/aether-lens.jpg',
          cost: '2,275',
        },
        {
          title: 'Aeon Disk',
          icon: 'https://dotabuff.com/assets/items/aeon-disk.jpg',
          cost: '3,000',
        },
      ],
    },
  },
  {
    id: 378,
    name: 'orb-of-destruction',
    link: 'https://dotabuff.com/assets/items/orb-of-destruction.jpg',
    tooltip: 'https://dotabuff.com/items/orb-of-destruction/tooltip',
    name_loc: 'Orb of Destruction',
    desc: {
      passive:
        "Passive: Impeding Corruption Attacks reduce the target's armor and movement speed. Slow amount varies based on whether the wearer is melee or ranged.",
      passive_desc:
        "Attacks reduce the target's armor and movement speed. Slow amount varies based on whether the wearer is melee or ranged.",
      stats: [],
      lore: "An ingot of chaos suspended in wizard's ether, housed within an arcanist's orb.",
      basic_desc:
        "Passive: Impeding Corruption Attacks reduce the target's armor and movement speed. Slow amount varies based on whether the wearer is melee or ranged.",
    },
  },
  {
    id: 179,
    name: 'dagon-level-2',
    link: 'https://dotabuff.com/assets/items/dagon-level-2.jpg',
    tooltip: 'https://dotabuff.com/items/dagon-level-2/tooltip',
    name_loc: 'Dagon (level 2)',
    price: '4,000',
    desc: {
      active_desc:
        'Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
      active: 'Active: Energy Burst ',
      cooldown: '35 30 25 20 15',
      manacost: '120 140 160 180 200',
      notes: 'Instantly kills illusions.',
      lore: 'A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Dagon (level 3)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-3.jpg',
          cost: '5,150',
        },
      ],
      builds_from: [
        {
          title: 'Recipe: Dagon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,150',
        },
        {
          title: 'Dagon',
          icon: 'https://dotabuff.com/assets/items/dagon.jpg',
          cost: '2,850',
        },
      ],
      basic_desc:
        'Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
    },
  },
  {
    id: 180,
    name: 'dagon-level-3',
    link: 'https://dotabuff.com/assets/items/dagon-level-3.jpg',
    tooltip: 'https://dotabuff.com/items/dagon-level-3/tooltip',
    name_loc: 'Dagon (level 3)',
    price: '5,150',
    desc: {
      active_desc:
        'Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
      active: 'Active: Energy Burst ',
      cooldown: '35 30 25 20 15',
      manacost: '120 140 160 180 200',
      notes: 'Instantly kills illusions.',
      lore: 'A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Dagon (level 4)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-4.jpg',
          cost: '6,300',
        },
      ],
      builds_from: [
        {
          title: 'Recipe: Dagon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,150',
        },
        {
          title: 'Dagon (level 2)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-2.jpg',
          cost: '4,000',
        },
      ],
      basic_desc:
        'Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
    },
  },
  {
    id: 15,
    name: 'mantle-of-intelligence',
    link: 'https://dotabuff.com/assets/items/mantle-of-intelligence.jpg',
    tooltip: 'https://dotabuff.com/items/mantle-of-intelligence/tooltip',
    name_loc: 'Mantle of Intelligence',
    price: '140',
    desc: {
      stats: ['+ 3 Intelligence'],
      lore: 'A beautiful sapphire mantle worn by generations of queens.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Null Talisman',
          icon: 'https://dotabuff.com/assets/items/null-talisman.jpg',
          cost: '505',
        },
      ],
    },
  },
  {
    id: 680,
    name: 'bullwhip',
    link: 'https://dotabuff.com/assets/items/bullwhip.jpg',
    tooltip: 'https://dotabuff.com/items/bullwhip/tooltip',
    name_loc: 'Bullwhip',
    desc: {
      active_desc:
        'Grants 18% movement speed when cast on allies, and slows by 18% when cast on enemies. Lasts 4.0 seconds.',
      active: 'Active: Whip',
      cooldown: '11',
      stats: ['+ 3.0 Health Regeneration', '+ 2.5 Mana Regeneration'],
      lore: 'Once the favored lash of an infamous broker of pit fighters and other live trade.',
      basic_desc:
        'Active: WhipGrants 18% movement speed when cast on allies, and slows by 18% when cast on enemies. Lasts 4.0 seconds.',
    },
  },
  {
    id: 33,
    name: 'cheese',
    link: 'https://dotabuff.com/assets/items/cheese.jpg',
    tooltip: 'https://dotabuff.com/items/cheese/tooltip',
    name_loc: 'Cheese',
    desc: {
      use: 'Use: Fondue ',
      use_desc: 'Instantly restores 2500 health and 1500 mana.',
      cooldown: '40',
      notes: 'Cheese is shareable.',
      lore: 'Made from the milk of a long lost Furbolg vendor, it restores the vitality of those who taste it.',
      basic_desc: 'Use: Fondue Instantly restores 2500 health and 1500 mana.',
    },
  },
  {
    id: 2,
    name: 'blades-of-attack',
    link: 'https://dotabuff.com/assets/items/blades-of-attack.jpg',
    tooltip: 'https://dotabuff.com/items/blades-of-attack/tooltip',
    name_loc: 'Blades of Attack',
    price: '450',
    desc: {
      stats: ['+ 9 Damage'],
      lore: 'The damage of these small, concealable blades should not be underestimated.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Phase Boots',
          icon: 'https://dotabuff.com/assets/items/phase-boots.jpg',
          cost: '1,500',
        },
        {
          title: "Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
          cost: '2,450',
        },
        {
          title: 'Crystalys',
          icon: 'https://dotabuff.com/assets/items/crystalys.jpg',
          cost: '1,950',
        },
        {
          title: 'Armlet of Mordiggian',
          icon: 'https://dotabuff.com/assets/items/armlet-of-mordiggian.jpg',
          cost: '2,500',
        },
        {
          title: 'Falcon Blade',
          icon: 'https://dotabuff.com/assets/items/falcon-blade.jpg',
          cost: '1,125',
        },
      ],
    },
  },
  {
    id: 692,
    name: 'eternal-shroud',
    link: 'https://dotabuff.com/assets/items/eternal-shroud.jpg',
    tooltip: 'https://dotabuff.com/items/eternal-shroud/tooltip',
    name_loc: 'Eternal Shroud',
    price: '3,300',
    desc: {
      passive:
        'Passive: Shroud Restores mana equal to 25% of incoming enemy spell damage.',
      passive_desc:
        'Restores mana equal to 25% of incoming enemy spell damage.',
      lore: 'A pristine hood that feeds upon strife to empower its owner.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Ogre Axe',
          icon: 'https://dotabuff.com/assets/items/ogre-axe.jpg',
          cost: '1,000',
        },
        {
          title: 'Cloak',
          icon: 'https://dotabuff.com/assets/items/cloak.jpg',
          cost: '800',
        },
        {
          title: 'Ring of Health',
          icon: 'https://dotabuff.com/assets/items/ring-of-health.jpg',
          cost: '700',
        },
        {
          title: 'Recipe: Eternal Shroud',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '800',
        },
      ],
      basic_desc:
        'Passive: Shroud Restores mana equal to 25% of incoming enemy spell damage.',
    },
  },
  {
    id: 334,
    name: 'imp-claw',
    link: 'https://dotabuff.com/assets/items/imp-claw.jpg',
    tooltip: 'https://dotabuff.com/items/imp-claw/tooltip',
    name_loc: 'Imp Claw',
    desc: {
      passive:
        'Passive: Critical Strike Empowers your next attack, causing it to be a critical strike dealing 130% damage.',
      passive_desc:
        'Empowers your next attack, causing it to be a critical strike dealing 130% damage.',
      cooldown: '7',
      stats: ['+ 26 Damage'],
      lore: 'Though their tasks are largely thankless, demon hunters can often turn a profit bartering parts in Weeping Rose.',
      basic_desc:
        'Passive: Critical Strike Empowers your next attack, causing it to be a critical strike dealing 130% damage.',
    },
  },
  {
    id: 335,
    name: 'flicker',
    link: 'https://dotabuff.com/assets/items/flicker.jpg',
    tooltip: 'https://dotabuff.com/items/flicker/tooltip',
    name_loc: 'Flicker',
    desc: {
      active_desc:
        'Dispells debuffs and blinks you in a random forward direction for a random distance between 200 and 600. If cast within 3 seconds of receiving player damage, it will blink in place.Dispel Type: Basic Dispel',
      active: 'Active: Flicker ',
      cooldown: '5',
      stats: ['+ 35 Movement Speed'],
      lore: "The technically-true-to-his-word 'teleportation device' crafted by a notorious fae trickster.",
      basic_desc:
        'Active: Flicker Dispells debuffs and blinks you in a random forward direction for a random distance between 200 and 600. If cast within 3 seconds of receiving player damage, it will blink in place.Dispel Type: Basic Dispel',
    },
  },
  {
    id: 355,
    name: 'broom-handle',
    link: 'https://dotabuff.com/assets/items/broom-handle.jpg',
    tooltip: 'https://dotabuff.com/items/broom-handle/tooltip',
    name_loc: 'Broom Handle',
    desc: {
      lore: 'The surprisingly dangerous creation of an apprentice sorcerer with a strange fondness for brooms.',
    },
  },
  {
    id: 189,
    name: 'dagon-level-4',
    link: 'https://dotabuff.com/assets/items/dagon-level-4.jpg',
    tooltip: 'https://dotabuff.com/items/dagon-level-4/tooltip',
    name_loc: 'Dagon (level 4)',
    price: '6,300',
    desc: {
      active_desc:
        'Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
      active: 'Active: Energy Burst ',
      cooldown: '35 30 25 20 15',
      manacost: '120 140 160 180 200',
      notes: 'Instantly kills illusions.',
      lore: 'A lesser wand that grows in power the longer it is used, it brings magic to the fingertips of the user.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Dagon (level 5)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-5.jpg',
          cost: '7,450',
        },
      ],
      builds_from: [
        {
          title: 'Recipe: Dagon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,150',
        },
        {
          title: 'Dagon (level 3)',
          icon: 'https://dotabuff.com/assets/items/dagon-level-3.jpg',
          cost: '5,150',
        },
      ],
      basic_desc:
        'Active: Energy Burst Emits a powerful burst of magical damage upon a targeted enemy unit. Upgradable.Damage: 400 500 600 700 800Range: 700 / 750 / 800 / 850 / 900Mana Cost: 120 140 160 180 200',
    },
  },
  {
    id: 265,
    name: 'infused-raindrops',
    link: 'https://dotabuff.com/assets/items/infused-raindrops.jpg',
    tooltip: 'https://dotabuff.com/items/infused-raindrops/tooltip',
    name_loc: 'Infused Raindrops',
    price: '225',
    desc: {
      passive:
        'Passive: Magical Damage Block Consumes a charge to block 120 magic damage from damage instances over 75 damage. Comes with 6 charges. When the charges are gone, the item disappears.',
      passive_desc:
        'Consumes a charge to block 120 magic damage from damage instances over 75 damage. Comes with 6 charges. When the charges are gone, the item disappears.',
      cooldown: '7',
      stats: ['+ 0.8 Mana Regeneration'],
      notes: 'Uses at most one charge per damage instance.',
      lore: 'Elemental protection from magical assaults.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Passive: Magical Damage Block Consumes a charge to block 120 magic damage from damage instances over 75 damage. Comes with 6 charges. When the charges are gone, the item disappears.',
    },
  },
  {
    id: 375,
    name: 'faded-broach',
    link: 'https://dotabuff.com/assets/items/faded-broach.jpg',
    tooltip: 'https://dotabuff.com/items/faded-broach/tooltip',
    name_loc: 'Faded Broach',
    desc: {
      stats: ['+ 200 Mana', '+ 20 Movement Speed'],
      lore: 'A life-saving jewel bestowed upon a young queen by a kindly vizier. ',
    },
  },
  {
    id: 834,
    name: 'blast-rig',
    link: 'https://dotabuff.com/assets/items/blast-rig.jpg',
    tooltip: 'https://dotabuff.com/items/blast-rig/tooltip',
    name_loc: 'Blast Rig',
    desc: {
      passive:
        'Passive: Hair Trigger The next time you get attacked by a hero within 400 range, explode dealing 250 damage to all enemies within a 400 radius and causing them to miss 100% of their attacks for 2 seconds.',
      passive_desc:
        'The next time you get attacked by a hero within 400 range, explode dealing 250 damage to all enemies within a 400 radius and causing them to miss 100% of their attacks for 2 seconds.',
      cooldown: '20',
      lore: 'One of a set of custom rigs once worn by infamous road agents in the Outlands, its siblings have been lost to misfires and the various tides of time.',
      basic_desc:
        'Passive: Hair Trigger The next time you get attacked by a hero within 400 range, explode dealing 250 damage to all enemies within a 400 radius and causing them to miss 100% of their attacks for 2 seconds.',
    },
  },
  {
    id: 277,
    name: 'yasha-and-kaya',
    link: 'https://dotabuff.com/assets/items/yasha-and-kaya.jpg',
    tooltip: 'https://dotabuff.com/items/yasha-and-kaya/tooltip',
    name_loc: 'Yasha and Kaya',
    price: '4,100',
    desc: {
      lore: 'Yasha and Kaya when paired together share a natural resonance.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Yasha',
          icon: 'https://dotabuff.com/assets/items/yasha.jpg',
          cost: '2,050',
        },
        {
          title: 'Kaya',
          icon: 'https://dotabuff.com/assets/items/kaya.jpg',
          cost: '2,050',
        },
      ],
    },
  },
  {
    id: 237,
    name: 'faerie-fire',
    link: 'https://dotabuff.com/assets/items/faerie-fire.jpg',
    tooltip: 'https://dotabuff.com/items/faerie-fire/tooltip',
    name_loc: 'Faerie Fire',
    price: '70',
    desc: {
      use: 'Use: Imbue ',
      use_desc: 'Instantly restores 85 health.',
      cooldown: '5',
      stats: ['+ 2 Damage'],
      lore: 'The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.',
      shop: 'Available at Home Shop',
      basic_desc: 'Use: Imbue Instantly restores 85 health.',
    },
  },
  {
    id: 18,
    name: 'band-of-elvenskin',
    link: 'https://dotabuff.com/assets/items/band-of-elvenskin.jpg',
    tooltip: 'https://dotabuff.com/items/band-of-elvenskin/tooltip',
    name_loc: 'Band of Elvenskin',
    price: '450',
    desc: {
      stats: ['+ 6 Agility'],
      lore: 'A tensile fabric often used for its light weight and ease of movement.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Yasha',
          icon: 'https://dotabuff.com/assets/items/yasha.jpg',
          cost: '2,050',
        },
        {
          title: 'Samurai Tabi',
          icon: 'https://dotabuff.com/assets/items/samurai-tabi.jpg',
          cost: '4,500',
        },
      ],
    },
  },
  {
    id: 600,
    name: 'overwhelming-blink',
    link: 'https://dotabuff.com/assets/items/overwhelming-blink.jpg',
    tooltip: 'https://dotabuff.com/items/overwhelming-blink/tooltip',
    name_loc: 'Overwhelming Blink',
    price: '6,800',
    desc: {
      active_desc:
        'Teleport to a target point up to 1200 units away.After teleportation, all enemies in a 800 AoE have 50% movement speed slow and 50 attack speed slow for 6.0 seconds, and take damage equal to 100 + 150% of your strength. Overwhelming Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
      active: 'Active: Overwhelming Blink ',
      cooldown: '15',
      stats: ['+ 25 Strength'],
      notes:
        "Self-casting will cause you to teleport in the direction of your team's fountain.If you used Overwhelming Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
      lore: 'A horrifying dagger forged in the chaos maw and nigh untouchable by mortal hands.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Blink Dagger',
          icon: 'https://dotabuff.com/assets/items/blink-dagger.jpg',
          cost: '2,250',
        },
        {
          title: 'Reaver',
          icon: 'https://dotabuff.com/assets/items/reaver.jpg',
          cost: '2,800',
        },
        {
          title: 'Recipe: Overwhelming Blink',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,750',
        },
      ],
      basic_desc:
        'Active: Overwhelming Blink Teleport to a target point up to 1200 units away.After teleportation, all enemies in a 800 AoE have 50% movement speed slow and 50 attack speed slow for 6.0 seconds, and take damage equal to 100 + 150% of your strength. Overwhelming Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
    },
  },
  {
    id: 686,
    name: 'quicksilver-amulet',
    link: 'https://dotabuff.com/assets/items/quicksilver-amulet.jpg',
    tooltip: 'https://dotabuff.com/items/quicksilver-amulet/tooltip',
    name_loc: 'Quicksilver Amulet',
    desc: {
      passive:
        'Passive: QuicksilverGrants you a bonus 5% movement speed and 20 attack speed anytime one of your abilities are on cooldown.',
      passive_desc:
        'Grants you a bonus 5% movement speed and 20 attack speed anytime one of your abilities are on cooldown.',
      lore: 'An enchanted talisman brimming with a mysterious substance.',
      basic_desc:
        'Passive: QuicksilverGrants you a bonus 5% movement speed and 20 attack speed anytime one of your abilities are on cooldown.',
    },
  },
  {
    id: 596,
    name: 'falcon-blade',
    link: 'https://dotabuff.com/assets/items/falcon-blade.jpg',
    tooltip: 'https://dotabuff.com/items/falcon-blade/tooltip',
    name_loc: 'Falcon Blade',
    price: '1,125',
    desc: {
      lore: 'An enchanted blade that long ago raised a hopeless urchin from pauper to king.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Blades of Attack',
          icon: 'https://dotabuff.com/assets/items/blades-of-attack.jpg',
          cost: '450',
        },
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
        {
          title: 'Fluffy Hat',
          icon: 'https://dotabuff.com/assets/items/fluffy-hat.jpg',
          cost: '250',
        },
        {
          title: 'Recipe: Falcon Blade',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '250',
        },
      ],
    },
  },
  {
    id: 354,
    name: 'ocean-heart',
    link: 'https://dotabuff.com/assets/items/ocean-heart.jpg',
    tooltip: 'https://dotabuff.com/items/ocean-heart/tooltip',
    name_loc: 'Ocean Heart',
    desc: {
      passive:
        'Passive: Water Regen Provides you with 10.0 HP regen and 5.0 mana regen while in the river.',
      passive_desc:
        'Provides you with 10.0 HP regen and 5.0 mana regen while in the river.',
      stats: ['+ 5 All Attributes'],
      lore: 'A charm blessed by the Council of the Brine.',
      basic_desc:
        'Passive: Water Regen Provides you with 10.0 HP regen and 5.0 mana regen while in the river.',
    },
  },
  {
    id: 297,
    name: 'vampire-fangs',
    link: 'https://dotabuff.com/assets/items/vampire-fangs.jpg',
    tooltip: 'https://dotabuff.com/items/vampire-fangs/tooltip',
    name_loc: 'Vampire Fangs',
    desc: {},
  },
  {
    id: 377,
    name: 'minotaur-horn',
    link: 'https://dotabuff.com/assets/items/minotaur-horn.jpg',
    tooltip: 'https://dotabuff.com/items/minotaur-horn/tooltip',
    name_loc: 'Minotaur Horn',
    desc: {
      active_desc: 'Grants Spell Immunity for 2.0 seconds.',
      active: 'Active: Lesser Avatar ',
      cooldown: '40',
      stats: ['+ 20 Strength'],
      lore: 'The trophy from a mighty beast ambushed and slain in the recesses of its own home.',
      basic_desc:
        'Active: Lesser Avatar Grants Spell Immunity for 2.0 seconds.',
    },
  },
  {
    id: 54,
    name: 'sacred-relic',
    link: 'https://dotabuff.com/assets/items/sacred-relic.jpg',
    tooltip: 'https://dotabuff.com/items/sacred-relic/tooltip',
    name_loc: 'Sacred Relic',
    price: '3,400',
    desc: {
      stats: ['+ 55 Damage'],
      lore: 'An ancient weapon that often turns the tides of war.',
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Divine Rapier',
          icon: 'https://dotabuff.com/assets/items/divine-rapier.jpg',
          cost: '5,600',
        },
        {
          title: 'Radiance',
          icon: 'https://dotabuff.com/assets/items/radiance.jpg',
          cost: '4,700',
        },
        {
          title: 'Nullifier',
          icon: 'https://dotabuff.com/assets/items/nullifier.jpg',
          cost: '4,375',
        },
      ],
    },
  },
  {
    id: 225,
    name: 'nullifier',
    link: 'https://dotabuff.com/assets/items/nullifier.jpg',
    tooltip: 'https://dotabuff.com/items/nullifier/tooltip',
    name_loc: 'Nullifier',
    price: '4,375',
    desc: {
      active_desc:
        'Dispels the target and applies a debuff for 5.0 seconds. Continuously dispels the target.Dispel Type: Basic Dispel',
      active: 'Active: Nullify ',
      cooldown: '10',
      stats: ['+ 75 Damage', '+ 10 Armor', '+ 6 Health Regeneration'],
      notes: 'Can be cast on invulnerable units.Pierces magic immunity.',
      lore: 'A dangerous weapon pilfered from an inverse dimension.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Helm of Iron Will',
          icon: 'https://dotabuff.com/assets/items/helm-of-iron-will.jpg',
          cost: '975',
        },
        {
          title: 'Sacred Relic',
          icon: 'https://dotabuff.com/assets/items/sacred-relic.jpg',
          cost: '3,400',
        },
      ],
      basic_desc:
        'Active: Nullify Dispels the target and applies a debuff for 5.0 seconds. Continuously dispels the target.Dispel Type: Basic Dispel',
    },
  },
  {
    id: 828,
    name: 'brigands-blade',
    link: 'https://dotabuff.com/assets/items/brigands-blade.jpg',
    tooltip: 'https://dotabuff.com/items/brigands-blade/tooltip',
    name_loc: "Brigand's Blade",
    desc: {
      passive:
        'Passive: Dark MercyYour attacks deal 10 more damage to enemies for each 10% HP they are missing.',
      passive_desc:
        'Your attacks deal 10 more damage to enemies for each 10% HP they are missing.',
      lore: "An infamous assassin's blade stolen and smuggled out of White Spire after its owner's mysterious demise.",
      basic_desc:
        'Passive: Dark MercyYour attacks deal 10 more damage to enemies for each 10% HP they are missing.',
    },
  },
  {
    id: 585,
    name: 'stormcrafter',
    link: 'https://dotabuff.com/assets/items/stormcrafter.jpg',
    tooltip: 'https://dotabuff.com/items/stormcrafter/tooltip',
    name_loc: 'Stormcrafter',
    desc: {
      passive:
        'Passive: Bottled Lightning Zaps 2 enemy targets within 700 range, dealing 200 damage and a 40% slow for 0.3 seconds. Strikes every 3 seconds.',
      passive_desc:
        'Zaps 2 enemy targets within 700 range, dealing 200 damage and a 40% slow for 0.3 seconds. Strikes every 3 seconds.',
      lore: 'The accidental byproduct of a spell conjured to entrap a lesser god.',
      basic_desc:
        'Passive: Bottled Lightning Zaps 2 enemy targets within 700 range, dealing 200 damage and a 40% slow for 0.3 seconds. Strikes every 3 seconds.',
    },
  },
  {
    id: 364,
    name: 'havoc-hammer',
    link: 'https://dotabuff.com/assets/items/havoc-hammer.jpg',
    tooltip: 'https://dotabuff.com/items/havoc-hammer/tooltip',
    name_loc: 'Havoc Hammer',
    desc: {
      active_desc:
        'Knocks back enemies in 400 range around you, slowing them by 50% for 3.0 seconds and dealing 175 + 1.0x your str as magical damage.',
      active: 'Active: Havoc ',
      cooldown: '10',
      stats: ['+ 14 Damage', '+ 14 Strength'],
      basic_desc:
        'Active: Havoc Knocks back enemies in 400 range around you, slowing them by 50% for 3.0 seconds and dealing 175 + 1.0x your str as magical damage.',
    },
  },
  {
    id: 577,
    name: 'possessed-mask',
    link: 'https://dotabuff.com/assets/items/possessed-mask.jpg',
    tooltip: 'https://dotabuff.com/items/possessed-mask/tooltip',
    name_loc: 'Possessed Mask',
    desc: {
      passive: 'Passive: LifestealHeals the attacker for 7 HP on each attack.',
      passive_desc: 'Heals the attacker for 7 HP on each attack.',
      stats: ['+ 7 Primary Attribute'],
      notes:
        'Grants 1/3rd of the value to each attribute for Universal Heroes.',
      lore: 'Even when discarded with specific purpose and great care, this frightening mask always finds its way onto the face of a new owner.',
      basic_desc:
        'Passive: LifestealHeals the attacker for 7 HP on each attack.',
    },
  },
  {
    id: 825,
    name: 'ascetics-cap',
    link: 'https://dotabuff.com/assets/items/ascetics-cap.jpg',
    tooltip: 'https://dotabuff.com/items/ascetics-cap/tooltip',
    name_loc: "Ascetic's Cap",
    desc: {
      passive:
        'Passive: EnduranceWhenever a debuff would be applied to the owner, grant 40% Status resistance for 3 seconds.',
      passive_desc:
        'Whenever a debuff would be applied to the owner, grant 40% Status resistance for 3 seconds.',
      cooldown: '30',
      lore: 'An austere hat thought to be of Turstarkuri origin.',
      basic_desc:
        'Passive: EnduranceWhenever a debuff would be applied to the owner, grant 40% Status resistance for 3 seconds.',
    },
  },
  {
    id: 840,
    name: 'tumblers-toy',
    link: 'https://dotabuff.com/assets/items/tumblers-toy.jpg',
    tooltip: 'https://dotabuff.com/items/tumblers-toy/tooltip',
    name_loc: "Tumbler's Toy",
    desc: {
      active_desc:
        "Propels your hero forward 300 units. Tumbler's Toy gets disabled for 3 seconds if its owner receives damage from a player source.",
      active: 'Active: Vault',
      cooldown: '15',
      lore: 'An antique plaything found in the ruins of an Ozenja circus bazaar.',
      basic_desc:
        "Active: VaultPropels your hero forward 300 units. Tumbler's Toy gets disabled for 3 seconds if its owner receives damage from a player source.",
    },
  },
  {
    id: 363,
    name: 'illusionists-cape',
    link: 'https://dotabuff.com/assets/items/illusionists-cape.jpg',
    tooltip: 'https://dotabuff.com/items/illusionists-cape/tooltip',
    name_loc: "Illusionist's Cape",
    desc: {
      active_desc: 'Creates an image under your control.',
      active: 'Active: Create Illusion  ',
      passive:
        'Passive: Illusion MasteryIncreases outgoing damage of all units and illusions controlled by the hero by 6%.',
      passive_desc:
        'Increases outgoing damage of all units and illusions controlled by the hero by 6%.',
      cooldown: '30',
      stats: ['+ 14 Agility', '+ 14 Strength'],
      lore: "A dashing cape whose creator insists on calling 'Cloak of Apparition' as opposed to his assistant's 'Illusion' drivel.",
      basic_desc:
        'Active: Create Illusion Creates an image under your control. ',
    },
  },
  {
    id: 269,
    name: 'holy-locket',
    link: 'https://dotabuff.com/assets/items/holy-locket.jpg',
    tooltip: 'https://dotabuff.com/items/holy-locket/tooltip',
    name_loc: 'Holy Locket',
    price: '2,400',
    desc: {
      active_desc:
        'Target an allied unit to instantly restore 15 health and mana per charge stored. Max 20 charges. Automatically gains a charge every 10 seconds and whenever a visible enemy within 1200 range uses an ability.',
      active: 'Active: Energy Charge',
      passive: 'Passive: Holy BlessingAmplifies heals you provide by 30%.',
      passive_desc: 'Amplifies heals you provide by 30%.',
      cooldown: '13',
      lore: 'A prized relic long thought lost forever in a failed crusade.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Magic Wand',
          icon: 'https://dotabuff.com/assets/items/magic-wand.jpg',
          cost: '450',
        },
        {
          title: 'Headdress',
          icon: 'https://dotabuff.com/assets/items/headdress.jpg',
          cost: '425',
        },
        {
          title: 'Recipe: Holy Locket',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '525',
        },
        {
          title: 'Diadem',
          icon: 'https://dotabuff.com/assets/items/diadem.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Active: Energy ChargeTarget an allied unit to instantly restore 15 health and mana per charge stored. Max 20 charges. Automatically gains a charge every 10 seconds and whenever a visible enemy within 1200 range uses an ability.',
    },
  },
  {
    id: 6,
    name: 'helm-of-iron-will',
    link: 'https://dotabuff.com/assets/items/helm-of-iron-will.jpg',
    tooltip: 'https://dotabuff.com/items/helm-of-iron-will/tooltip',
    name_loc: 'Helm of Iron Will',
    price: '975',
    desc: {
      stats: ['+ 6 Armor', '+ 5.0 Health Regeneration'],
      lore: 'The helmet of a legendary warrior who fell in battle.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Armlet of Mordiggian',
          icon: 'https://dotabuff.com/assets/items/armlet-of-mordiggian.jpg',
          cost: '2,500',
        },
        {
          title: 'Helm of the Dominator',
          icon: 'https://dotabuff.com/assets/items/helm-of-the-dominator.jpg',
          cost: '2,625',
        },
        {
          title: 'Nullifier',
          icon: 'https://dotabuff.com/assets/items/nullifier.jpg',
          cost: '4,375',
        },
        {
          title: 'Crimson Guard',
          icon: 'https://dotabuff.com/assets/items/crimson-guard.jpg',
          cost: '3,600',
        },
      ],
    },
  },
  {
    id: 261,
    name: 'crown',
    link: 'https://dotabuff.com/assets/items/crown.jpg',
    tooltip: 'https://dotabuff.com/items/crown/tooltip',
    name_loc: 'Crown',
    price: '450',
    desc: {
      stats: ['+ 4 All Attributes'],
      lore: 'A stately crown created to ensure a well-meaning but ungifted heir could fend off usurpers and govern with a strong hand.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Veil of Discord',
          icon: 'https://dotabuff.com/assets/items/veil-of-discord.jpg',
          cost: '1,525',
        },
        {
          title: 'Rod of Atos',
          icon: 'https://dotabuff.com/assets/items/rod-of-atos.jpg',
          cost: '2,750',
        },
        {
          title: 'Meteor Hammer',
          icon: 'https://dotabuff.com/assets/items/meteor-hammer.jpg',
          cost: '2,400',
        },
        {
          title: 'Solar Crest',
          icon: 'https://dotabuff.com/assets/items/solar-crest.jpg',
          cost: '2,425',
        },
      ],
    },
  },
  {
    id: 360,
    name: 'clumsy-net',
    link: 'https://dotabuff.com/assets/items/clumsy-net.jpg',
    tooltip: 'https://dotabuff.com/items/clumsy-net/tooltip',
    name_loc: 'Clumsy Net',
    desc: {
      active_desc:
        'Ensnares the target enemy and yourself for 1.75 seconds. Range: 600',
      active: 'Active: Ensnare ',
      cooldown: '25',
      stats: ['+ 5 All Attributes', '+ 2 Mana Regeneration'],
      basic_desc:
        'Active: Ensnare Ensnares the target enemy and yourself for 1.75 seconds. Range: 600',
    },
  },
  {
    id: 485,
    name: 'blitz-knuckles',
    link: 'https://dotabuff.com/assets/items/blitz-knuckles.jpg',
    tooltip: 'https://dotabuff.com/items/blitz-knuckles/tooltip',
    name_loc: 'Blitz Knuckles',
    price: '1,000',
    desc: {
      stats: ['+ 35 Attack Speed'],
      lore: "An underground arcanist's update of a back-alley classic.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Orchid Malevolence',
          icon: 'https://dotabuff.com/assets/items/orchid-malevolence.jpg',
          cost: '3,475',
        },
        {
          title: 'Monkey King Bar',
          icon: 'https://dotabuff.com/assets/items/monkey-king-bar.jpg',
          cost: '4,975',
        },
        {
          title: 'Shadow Blade',
          icon: 'https://dotabuff.com/assets/items/shadow-blade.jpg',
          cost: '3,000',
        },
        {
          title: 'Witch Blade',
          icon: 'https://dotabuff.com/assets/items/witch-blade.jpg',
          cost: '2,600',
        },
      ],
    },
  },
  {
    id: 565,
    name: 'chipped-vest',
    link: 'https://dotabuff.com/assets/items/chipped-vest.jpg',
    tooltip: 'https://dotabuff.com/items/chipped-vest/tooltip',
    name_loc: 'Chipped Vest',
    desc: {
      passive:
        'PassiveEverytime you are attacked, you return 30 damage to heroes and 20 damage to creeps.',
      passive_desc:
        'Everytime you are attacked, you return 30 damage to heroes and 20 damage to creeps.',
      stats: ['+ 4.0 Health Regeneration'],
      lore: "It doesn't look like much, but it's oddly comfy.",
      basic_desc:
        'PassiveEverytime you are attacked, you return 30 damage to heroes and 20 damage to creeps.',
    },
  },
  {
    id: 304,
    name: 'ironwood-tree',
    link: 'https://dotabuff.com/assets/items/ironwood-tree.jpg',
    tooltip: 'https://dotabuff.com/items/ironwood-tree/tooltip',
    name_loc: 'Ironwood Tree',
    desc: {
      use: 'Use: Plant Tree ',
      use_desc:
        'Targets the ground to plant a happy little tree that lasts for 20 seconds.Range: 800',
      cooldown: '15',
      stats: ['+ 6 All Attributes'],
      lore: 'Precious. And hearty as a weed.',
      builds_from: [
        {
          title: 'Recipe: Ironwood Tree',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1',
        },
      ],
      basic_desc:
        'Use: Plant Tree Targets the ground to plant a happy little tree that lasts for 20 seconds.Range: 800',
    },
  },
  {
    id: 603,
    name: 'swift-blink',
    link: 'https://dotabuff.com/assets/items/swift-blink.jpg',
    tooltip: 'https://dotabuff.com/items/swift-blink/tooltip',
    name_loc: 'Swift Blink',
    price: '6,800',
    desc: {
      active_desc:
        'Teleport to a target point up to 1200 units away.After teleportation, you gain 40% phased movement speed and +35 Agility for 6 seconds. Swift Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
      active: 'Active: Swift Blink ',
      cooldown: '15',
      notes:
        "Self-casting will cause you to teleport in the direction of your team's fountain.If you used Swift Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
      lore: "A cunning blade able to anticipate and enable its bearer's movements.",
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Blink Dagger',
          icon: 'https://dotabuff.com/assets/items/blink-dagger.jpg',
          cost: '2,250',
        },
        {
          title: 'Eaglesong',
          icon: 'https://dotabuff.com/assets/items/eaglesong.jpg',
          cost: '2,800',
        },
        {
          title: 'Recipe: Swift Blink',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,750',
        },
      ],
      basic_desc:
        'Active: Swift Blink Teleport to a target point up to 1200 units away.After teleportation, you gain 40% phased movement speed and +35 Agility for 6 seconds. Swift Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
    },
  },
  {
    id: 838,
    name: 'pig-pole',
    link: 'https://dotabuff.com/assets/items/pig-pole.jpg',
    tooltip: 'https://dotabuff.com/items/pig-pole/tooltip',
    name_loc: 'Pig Pole',
    desc: {
      active_desc:
        'Turns your hero into a critter for 4 seconds and gives them +10% Movement Speed.',
      active: 'Active: Pig, Out!',
      cooldown: '25',
      manacost: '50',
      stats: ['+ 6 All Attributes'],
      lore: 'A makeshift charm misplaced by a peace-loving, addlebrained enchanter.',
      basic_desc:
        'Active: Pig, Out!Turns your hero into a critter for 4 seconds and gives them +10% Movement Speed.',
    },
  },
  {
    id: 298,
    name: 'craggy-coat',
    link: 'https://dotabuff.com/assets/items/craggy-coat.jpg',
    tooltip: 'https://dotabuff.com/items/craggy-coat/tooltip',
    name_loc: 'Craggy Coat',
    desc: {
      stats: ['+ 12 Armor', ' -35 -Attack Speed', '+ 150 Health'],
      basic_desc:
        "Increases the wearer's armor, while reducing their attack speed.",
    },
  },
  {
    id: 257,
    name: 'tome-of-knowledge',
    link: 'https://dotabuff.com/assets/items/tome-of-knowledge.jpg',
    tooltip: 'https://dotabuff.com/items/tome-of-knowledge/tooltip',
    name_loc: 'Tome of Knowledge',
    price: '75',
    desc: {
      use: 'Use: Enlighten',
      use_desc:
        'Grants you 700 experience plus 135 per tome consumed by your team after the first two.Tomes Used By Team: 0',
      lore: 'That which raises beast to man and man to god.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: EnlightenGrants you 700 experience plus 135 per tome consumed by your team after the first two.Tomes Used By Team: 0',
    },
  },
  {
    id: 325,
    name: 'princes-knife',
    link: 'https://dotabuff.com/assets/items/princes-knife.jpg',
    tooltip: 'https://dotabuff.com/items/princes-knife/tooltip',
    name_loc: "Prince's Knife",
    desc: {
      passive:
        'Passive: Hex Strike The next attack hexes the hit enemy into a frog for 1.5 seconds.',
      passive_desc:
        'The next attack hexes the hit enemy into a frog for 1.5 seconds.',
      cooldown: '10',
      stats: ['+ 60% Attack Projectile Speed'],
      basic_desc:
        'Passive: Hex Strike The next attack hexes the hit enemy into a frog for 1.5 seconds.',
    },
  },
  {
    id: 604,
    name: 'arcane-blink',
    link: 'https://dotabuff.com/assets/items/arcane-blink.jpg',
    tooltip: 'https://dotabuff.com/items/arcane-blink/tooltip',
    name_loc: 'Arcane Blink',
    price: '6,800',
    desc: {
      active_desc:
        'Teleport to a target point up to 1400 units away. Arcane Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
      active: 'Active: Arcane Blink ',
      cooldown: '7',
      notes:
        "Self-casting will cause you to teleport in the direction of your team's fountain.If you used Arcane Blink to teleport to a distance over the maximum range, you'll be teleported 4/5 of the maximum range instead.",
      lore: 'A revitalizing tool to help bear the weight of arcane expenditure.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Blink Dagger',
          icon: 'https://dotabuff.com/assets/items/blink-dagger.jpg',
          cost: '2,250',
        },
        {
          title: 'Mystic Staff',
          icon: 'https://dotabuff.com/assets/items/mystic-staff.jpg',
          cost: '2,800',
        },
        {
          title: 'Recipe: Arcane Blink',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,750',
        },
      ],
      basic_desc:
        'Active: Arcane Blink Teleport to a target point up to 1400 units away. Arcane Blink cannot be used for 3.0 seconds after taking damage from an enemy hero or Roshan.',
    },
  },
  {
    id: 837,
    name: 'witchbane',
    link: 'https://dotabuff.com/assets/items/witchbane.jpg',
    tooltip: 'https://dotabuff.com/items/witchbane/tooltip',
    name_loc: 'Witchbane',
    desc: {
      active_desc: 'Dispel Target Enemy or Ally.Dispel Type: Basic Dispel',
      active: 'Active: Cleanse',
      passive:
        'Passive: SubjugateYour attacks deal bonus damage equal to 4% of your target Max Mana.',
      passive_desc:
        'Your attacks deal bonus damage equal to 4% of your target Max Mana.',
      cooldown: '20',
      manacost: '75',
      lore: 'With ready access to test subjects, untold cruelties have been dreamed up and loosed upon the world from within the walls of the Tyler Estate.',
      basic_desc:
        'Active: CleanseDispel Target Enemy or Ally.Dispel Type: Basic Dispel',
    },
  },
  {
    id: 279,
    name: 'ring-of-tarrasque',
    link: 'https://dotabuff.com/assets/items/ring-of-tarrasque.jpg',
    tooltip: 'https://dotabuff.com/items/ring-of-tarrasque/tooltip',
    name_loc: 'Ring of Tarrasque',
    price: '650',
    desc: {
      stats: ['+ 150 Health', '+ 4.0 Health Regeneration'],
      lore: 'An ageless ring forged with an otherwise simple blood magic amplified by the presumed source of its key component.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Heart of Tarrasque',
          icon: 'https://dotabuff.com/assets/items/heart-of-tarrasque.jpg',
          cost: '5,000',
        },
        {
          title: 'Holy Locket',
          icon: 'https://dotabuff.com/assets/items/holy-locket.jpg',
          cost: '2,400',
        },
      ],
    },
  },
  {
    id: 365,
    name: 'magic-lamp',
    link: 'https://dotabuff.com/assets/items/magic-lamp.jpg',
    tooltip: 'https://dotabuff.com/items/magic-lamp/tooltip',
    name_loc: 'Magic Lamp',
    desc: {
      passive:
        "Passive: Rejuvenate  When the wearer's health falls below 20.0%, they will receive a hard dispel and be healed for 300 health.",
      passive_desc:
        "When the wearer's health falls below 20.0%, they will receive a hard dispel and be healed for 300 health.",
      cooldown: '75',
      stats: ['+ 300 Health'],
      basic_desc:
        "Passive: Rejuvenate  When the wearer's health falls below 20.0%, they will receive a hard dispel and be healed for 300 health.",
    },
  },
  {
    id: 299,
    name: 'greater-faerie-fire',
    link: 'https://dotabuff.com/assets/items/greater-faerie-fire.jpg',
    tooltip: 'https://dotabuff.com/items/greater-faerie-fire/tooltip',
    name_loc: 'Greater Faerie Fire',
    desc: {
      use: 'Use: Imbue ',
      use_desc: 'Instantly restores 250 health.',
      cooldown: '10',
      stats: ['+ 20 Damage'],
      basic_desc: 'Use: Imbue Instantly restores 250 health.',
    },
  },
  {
    id: 106,
    name: 'necronomicon',
    link: 'https://dotabuff.com/assets/items/necronomicon.jpg',
    tooltip: 'https://dotabuff.com/items/necronomicon/tooltip',
    name_loc: 'Necronomicon',
    price: '2,050',
    desc: {
      active_desc:
        'Summons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 800 / 1200 / 1600Damage: 25 / 45 / 65Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 800 / 1200 / 1600Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200',
      active: 'Active: Demonic Summoning',
      cooldown: '80',
      manacost: '150',
      stats: ['+ 6 / 12 / 18 Strength', '+ 2.0 / 3.0 / 4.0 Mana Regeneration'],
      lore: 'Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Necronomicon (level 2)',
          icon: 'https://dotabuff.com/assets/items/necronomicon-level-2.jpg',
          cost: '3,300',
        },
      ],
      builds_from: [
        {
          title: 'Belt of Strength',
          icon: 'https://dotabuff.com/assets/items/belt-of-strength.jpg',
          cost: '450',
        },
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
        {
          title: "Sage's Mask",
          icon: 'https://dotabuff.com/assets/items/sages-mask.jpg',
          cost: '175',
        },
        {
          title: 'Recipe: Necronomicon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,250',
        },
      ],
      basic_desc:
        'Active: Demonic SummoningSummons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 800 / 1200 / 1600Damage: 25 / 45 / 65Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 800 / 1200 / 1600Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200',
    },
  },
  {
    id: 308,
    name: 'repair-kit',
    link: 'https://dotabuff.com/assets/items/repair-kit.jpg',
    tooltip: 'https://dotabuff.com/items/repair-kit/tooltip',
    name_loc: 'Repair Kit',
    desc: {
      use: 'Use: Building Repair ',
      use_desc:
        "Targets a building, restoring 40% of it's health over 30.0 seconds. Also grants +10 armor during this period. Range: 600",
      cooldown: '60',
      stats: ['+ 25 Health Regeneration'],
      basic_desc:
        "Use: Building Repair Targets a building, restoring 40% of it's health over 30.0 seconds. Also grants +10 armor during this period. Range: 600",
    },
  },
  {
    id: 949,
    name: 'ogre-seal-totem',
    link: 'https://dotabuff.com/assets/items/ogre-seal-totem.jpg',
    tooltip: 'https://dotabuff.com/items/ogre-seal-totem/tooltip',
    name_loc: 'Ogre Seal Totem',
    desc: {
      active_desc:
        'Flop forward like an ogre seal 2 times, dealing 150 damage and slowing enemies in a 225 radius by -100% for 1.0 second on each bounce. 400 bounce distance.',
      active: 'Active: Ogre Seal Flop  ',
      cooldown: '40',
      manacost: '75',
      basic_desc:
        'Active: Ogre Seal Flop Flop forward like an ogre seal 2 times, dealing 150 damage and slowing enemies in a 225 radius by -100% for 1.0 second on each bounce. 400 bounce distance. ',
    },
  },
  {
    id: 593,
    name: 'fluffy-hat',
    link: 'https://dotabuff.com/assets/items/fluffy-hat.jpg',
    tooltip: 'https://dotabuff.com/items/fluffy-hat/tooltip',
    name_loc: 'Fluffy Hat',
    price: '250',
    desc: {
      stats: ['+ 125 Health'],
      lore: 'Fine and functional foppery for the fashion-forward fighter.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Force Staff',
          icon: 'https://dotabuff.com/assets/items/force-staff.jpg',
          cost: '2,200',
        },
        {
          title: 'Orb of Corrosion',
          icon: 'https://dotabuff.com/assets/items/orb-of-corrosion.jpg',
          cost: '925',
        },
        {
          title: 'Falcon Blade',
          icon: 'https://dotabuff.com/assets/items/falcon-blade.jpg',
          cost: '1,125',
        },
        {
          title: 'Pavise',
          icon: 'https://dotabuff.com/assets/items/pavise.jpg',
          cost: '1,400',
        },
      ],
    },
  },
  {
    id: 835,
    name: 'fae-grenade',
    link: 'https://dotabuff.com/assets/items/fae-grenade.jpg',
    tooltip: 'https://dotabuff.com/items/fae-grenade/tooltip',
    name_loc: 'Fae Grenade',
    desc: {
      active_desc:
        'Throws a Mark towards an enemy within 900 range applying a debuff that deals 40 damage every second and provides vision of the unit for 7 seconds.',
      active: 'Active: Shadow Brand',
      cooldown: '20',
      manacost: '25',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: 'Those marked for death by the fae shine brightly to all manner of creatures in the shadow realm.',
      basic_desc:
        'Active: Shadow BrandThrows a Mark towards an enemy within 900 range applying a debuff that deals 40 damage every second and provides vision of the unit for 7 seconds.',
    },
  },
  {
    id: 241,
    name: 'tango-shared',
    link: 'https://dotabuff.com/assets/items/tango-shared.jpg',
    tooltip: 'https://dotabuff.com/items/tango-shared/tooltip',
    name_loc: 'Tango (Shared)',
    price: '30',
    desc: {
      use: 'Use: Devour ',
      use_desc:
        'Consumes a target tree to gain 7.0 health regeneration for 16.0 seconds. Consuming an Ironwood Tree doubles the heal amount.Tree Range: 165',
      lore: 'Om nom nom.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: Devour Consumes a target tree to gain 7.0 health regeneration for 16.0 seconds. Consuming an Ironwood Tree doubles the heal amount.Tree Range: 165',
    },
  },
  {
    id: 330,
    name: 'witless-shako',
    link: 'https://dotabuff.com/assets/items/witless-shako.jpg',
    tooltip: 'https://dotabuff.com/items/witless-shako/tooltip',
    name_loc: 'Witless Shako',
    desc: {
      stats: ['+ 1350 Max Health Increase', ' 400 -Max Mana'],
      basic_desc:
        "Increases the wearer's max health, while reducing their max mana.",
    },
  },
  {
    id: 473,
    name: 'voodoo-mask',
    link: 'https://dotabuff.com/assets/items/voodoo-mask.jpg',
    tooltip: 'https://dotabuff.com/items/voodoo-mask/tooltip',
    name_loc: 'Voodoo Mask',
    price: '700',
    desc: {
      passive:
        'Passive: Spell LifestealSpell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  Lifesteal reduced against creeps.',
      passive_desc:
        'Spell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  Lifesteal reduced against creeps.',
      stats: ['+ 10.0% Spell Lifesteal'],
      lore: 'A mask tuned to sip the arcane bindings that pass between caster and foe.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Dagon',
          icon: 'https://dotabuff.com/assets/items/dagon.jpg',
          cost: '2,850',
        },
        {
          title: 'Bloodstone',
          icon: 'https://dotabuff.com/assets/items/bloodstone.jpg',
          cost: '4,400',
        },
      ],
      basic_desc:
        'Passive: Spell LifestealSpell damage dealt to enemy heroes is returned to the caster as health, regardless of spell damage type.  Lifesteal reduced against creeps.',
    },
  },
  {
    id: 236,
    name: 'necronomicon-level-2',
    link: 'https://dotabuff.com/assets/items/necronomicon-level-2.jpg',
    tooltip: 'https://dotabuff.com/items/necronomicon-level-2/tooltip',
    name_loc: 'Necronomicon (level 2)',
    price: '3,300',
    desc: {
      active_desc:
        'Summons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 800 / 1200 / 1600Damage: 25 / 45 / 65Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 800 / 1200 / 1600Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200',
      active: 'Active: Demonic Summoning',
      cooldown: '80',
      manacost: '150',
      stats: ['+ 6 / 12 / 18 Strength', '+ 2.0 / 3.0 / 4.0 Mana Regeneration'],
      lore: 'Considered the ultimate in necromancy and demonology, a powerful malefic force is locked within its pages.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Necronomicon (level 3)',
          icon: 'https://dotabuff.com/assets/items/necronomicon-level-3.jpg',
          cost: '4,550',
        },
      ],
      builds_from: [
        {
          title: 'Recipe: Necronomicon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,250',
        },
        {
          title: 'Necronomicon',
          icon: 'https://dotabuff.com/assets/items/necronomicon.jpg',
          cost: '2,050',
        },
      ],
      basic_desc:
        'Active: Demonic SummoningSummons a Warrior and an Archer to fight for you for 60 seconds.Warrior:Burns mana every hit, and deals magical damage to whoever kills it.  Gains True Sight at level 3.Health: 800 / 1200 / 1600Damage: 25 / 45 / 65Mana Break Damage: 30 / 40 / 50Last Will Damage: 600 / 700 / 800Archer:Has a passive movement and attack speed aura. Gains Purge at Level 3.Health: 800 / 1200 / 1600Damage: 37 / 57 / 75Aura Move Speed: 5 / 7 / 9Aura Radius: 1200',
    },
  },
  {
    id: 990,
    name: 'eye-of-the-vizier',
    link: 'https://dotabuff.com/assets/items/eye-of-the-vizier.jpg',
    tooltip: 'https://dotabuff.com/items/eye-of-the-vizier/tooltip',
    name_loc: 'Eye of the Vizier',
    desc: {
      lore: 'The ring of a cunning court mage who imprisoned a cadre of enemies to serve as his personal mana reserve.',
    },
  },
  {
    id: 598,
    name: 'mage-slayer',
    link: 'https://dotabuff.com/assets/items/mage-slayer.jpg',
    tooltip: 'https://dotabuff.com/items/mage-slayer/tooltip',
    name_loc: 'Mage Slayer',
    price: '2,500',
    desc: {
      passive:
        'Passive: Mage SlayerPlaces a debuff when you attack enemies, causing them to do 35% less spell damage for 6 seconds.',
      passive_desc:
        'Places a debuff when you attack enemies, causing them to do 35% less spell damage for 6 seconds.',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      lore: "Forged by a secret order in The Third Age of Praxa'cia to fell the False King.",
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Bloodthorn',
          icon: 'https://dotabuff.com/assets/items/bloodthorn.jpg',
          cost: '6,800',
        },
      ],
      builds_from: [
        {
          title: 'Cloak',
          icon: 'https://dotabuff.com/assets/items/cloak.jpg',
          cost: '800',
        },
        {
          title: 'Oblivion Staff',
          icon: 'https://dotabuff.com/assets/items/oblivion-staff.jpg',
          cost: '1,500',
        },
        {
          title: 'Recipe: Mage Slayer',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '200',
        },
      ],
      basic_desc:
        'Passive: Mage SlayerPlaces a debuff when you attack enemies, causing them to do 35% less spell damage for 6 seconds.',
    },
  },
  {
    id: 908,
    name: 'wraith-pact',
    link: 'https://dotabuff.com/assets/items/wraith-pact.jpg',
    tooltip: 'https://dotabuff.com/items/wraith-pact/tooltip',
    name_loc: 'Wraith Pact',
    price: '4,050',
    desc: {
      active_desc:
        "Summons a movable totem in your location for 25 seconds that reduces all physical damage of enemies within 900 radius by 30% and deals 45 damage per second. The totem eminates the Vladmir's Aura around it. Totem can be destroyed in 4 hits. Creeps deal half damage to the totem.",
      active: "Active: Wraith's Reprisal",
      passive:
        "Passive: Vladmir's AuraGrants 24% lifesteal, 18% bonus damage, 2.0 mana regeneration, and 3.0 armor to nearby allies. Lifesteal from creeps is reduced by 50%.Radius: 1200",
      passive_desc:
        'Grants 24% lifesteal, 18% bonus damage, 2.0 mana regeneration, and 3.0 armor to nearby allies. Lifesteal from creeps is reduced by 50%.Radius: 1200',
      cooldown: '60',
      manacost: '100',
      lore: 'A sentient amulet whose animus shakes the courage of even the strongest foes.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Point Booster',
          icon: 'https://dotabuff.com/assets/items/point-booster.jpg',
          cost: '1,200',
        },
        {
          title: "Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
          cost: '2,450',
        },
        {
          title: 'Recipe: Wraith Pact',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '400',
        },
      ],
      basic_desc:
        "Active: Wraith's ReprisalSummons a movable totem in your location for 25 seconds that reduces all physical damage of enemies within 900 radius by 30% and deals 45 damage per second. The totem eminates the Vladmir's Aura around it. Totem can be destroyed in 4 hits. Creeps deal half damage to the totem.",
    },
  },
  {
    id: 931,
    name: 'boots-of-bearing',
    link: 'https://dotabuff.com/assets/items/boots-of-bearing.jpg',
    tooltip: 'https://dotabuff.com/items/boots-of-bearing/tooltip',
    name_loc: 'Boots of Bearing',
    price: '4,075',
    desc: {
      active_desc:
        'Gives +50 attack speed and +15% movement speed to nearby allies for 6 seconds. For the first 1.5 seconds allies are immune to slows. Radius: 1200',
      active: 'Active: Endurance  ',
      passive:
        'Passive: Swiftness AuraGrants 20 movement speed to allies.  Radius: 1200',
      passive_desc: 'Grants 20 movement speed to allies.  Radius: 1200',
      cooldown: '30',
      lore: 'Resplendent footwear fashioned for the ancient herald that first dared spread the glory of Stonehall beyond the original borders of its nascent claim.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Drum of Endurance',
          icon: 'https://dotabuff.com/assets/items/drum-of-endurance.jpg',
          cost: '1,650',
        },
        {
          title: 'Tranquil Boots',
          icon: 'https://dotabuff.com/assets/items/tranquil-boots.jpg',
          cost: '925',
        },
        {
          title: 'Recipe: Boots of Bearing',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,500',
        },
      ],
      basic_desc:
        'Active: Endurance Gives +50 attack speed and +15% movement speed to nearby allies for 6 seconds. For the first 1.5 seconds allies are immune to slows. Radius: 1200 ',
    },
  },
  {
    id: 946,
    name: 'lance-of-pursuit',
    link: 'https://dotabuff.com/assets/items/lance-of-pursuit.jpg',
    tooltip: 'https://dotabuff.com/items/lance-of-pursuit/tooltip',
    name_loc: 'Lance of Pursuit',
    desc: {
      passive:
        'Passive: Hound Attacking from behind slows enemies by 12% (6% if Ranged) and deals 15 more damage. Slow lasts 2 second(s).',
      passive_desc:
        'Attacking from behind slows enemies by 12% (6% if Ranged) and deals 15 more damage. Slow lasts 2 second(s).',
      lore: 'The gleaming weapon of a tarnished knight haunted by his duties to an unworthy king.',
      basic_desc:
        'Passive: Hound Attacking from behind slows enemies by 12% (6% if Ranged) and deals 15 more damage. Slow lasts 2 second(s).',
    },
  },
  {
    id: 610,
    name: 'wind-waker',
    link: 'https://dotabuff.com/assets/items/wind-waker.jpg',
    tooltip: 'https://dotabuff.com/items/wind-waker/tooltip',
    name_loc: 'Wind Waker',
    price: '6,825',
    desc: {
      active_desc:
        'Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself, enemy units or allied units.Enemy units take 50 magical damage upon landing.Range: 550Dispel Type: Basic Dispel',
      active: 'Active: Cyclone ',
      cooldown: '13',
      manacost: '175',
      stats: [
        '+ 30 Movement Speed',
        '+ 3.0 Mana Regeneration',
        '+ 35 Intelligence',
      ],
      notes:
        'Cyclone can dispel some buffs and debuffs.When cast on yourself, the cyclone can be moved anywhere at a speed of 360.Cyclone duration is unaffected by status resistance.',
      dispellable: 'Dispellable.',
      lore: 'Proof enough to some that unseen forces manipulate the happenings of the material plane.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Mystic Staff',
          icon: 'https://dotabuff.com/assets/items/mystic-staff.jpg',
          cost: '2,800',
        },
        {
          title: "Eul's Scepter of Divinity",
          icon: 'https://dotabuff.com/assets/items/euls-scepter-of-divinity.jpg',
          cost: '2,725',
        },
        {
          title: 'Recipe: Wind Waker',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,300',
        },
      ],
      basic_desc:
        'Active: Cyclone Sweeps a target unit up into a cyclone, making them invulnerable for 2.5 seconds. Cyclone can be cast on yourself, enemy units or allied units.Enemy units take 50 magical damage upon landing.Range: 550Dispel Type: Basic Dispel',
    },
  },
  {
    id: 1076,
    name: 'specialists-array',
    link: 'https://dotabuff.com/assets/items/specialists-array.jpg',
    tooltip: 'https://dotabuff.com/items/specialists-array/tooltip',
    name_loc: "Specialist's Array",
    desc: {
      passive:
        'Passive: Crackshot Ranged Only. The next attack fires projectiles at 2 additional targets within attack range. Does not trigger attack modifiers.',
      passive_desc:
        'Ranged Only. The next attack fires projectiles at 2 additional targets within attack range. Does not trigger attack modifiers.',
      cooldown: '8',
      lore: "An impressive kit of trigger enhancements born in an aging assassin's idle mind.",
      basic_desc:
        'Passive: Crackshot Ranged Only. The next attack fires projectiles at 2 additional targets within attack range. Does not trigger attack modifiers.',
    },
  },
  {
    id: 947,
    name: 'occult-bracelet',
    link: 'https://dotabuff.com/assets/items/occult-bracelet.jpg',
    tooltip: 'https://dotabuff.com/items/occult-bracelet/tooltip',
    name_loc: 'Occult Bracelet',
    desc: {
      passive:
        'Passive: Rites of ElosharEach time the wearer is attacked, they gain a stack of 0.5 mana regen, up to 5 stacks. Stacks last for 10 seconds.',
      passive_desc:
        'Each time the wearer is attacked, they gain a stack of 0.5 mana regen, up to 5 stacks. Stacks last for 10 seconds.',
      lore: "A band that bears effigy of the dark goddess Eloshar's unsleeping eye.",
      basic_desc:
        'Passive: Rites of ElosharEach time the wearer is attacked, they gain a stack of 0.5 mana regen, up to 5 stacks. Stacks last for 10 seconds.',
    },
  },
  {
    id: 1077,
    name: 'dagger-of-ristul',
    link: 'https://dotabuff.com/assets/items/dagger-of-ristul.jpg',
    tooltip: 'https://dotabuff.com/items/dagger-of-ristul/tooltip',
    name_loc: 'Dagger of Ristul',
    desc: {
      active_desc:
        'Consume 100 health to temporarily gain 40 damage. Lasts 8 seconds.',
      active: 'Active: Imbrue ',
      cooldown: '30',
      lore: 'A sinister shiv that grants favor to those willing to stain its blade with a sacrifice of their own blood.',
      basic_desc:
        'Active: Imbrue Consume 100 health to temporarily gain 40 damage. Lasts 8 seconds.',
    },
  },
  {
    id: 945,
    name: 'seeds-of-serenity',
    link: 'https://dotabuff.com/assets/items/seeds-of-serenity.jpg',
    tooltip: 'https://dotabuff.com/items/seeds-of-serenity/tooltip',
    name_loc: 'Seeds of Serenity',
    desc: {
      active_desc:
        'Target the ground with a 350 radius. Provides +10 health regeneration to all allied units while they are in the area of effect. Lasts 14 seconds.',
      active: 'Active: Verdurous Dale  ',
      cooldown: '40',
      lore: 'An evergreen sprout treasured by the woodkin and highly coveted by interlopers and their like.',
      basic_desc:
        'Active: Verdurous Dale  Target the ground with a 350 radius. Provides +10 health regeneration to all allied units while they are in the area of effect. Lasts 14 seconds.',
    },
  },
  {
    id: 260,
    name: 'refresher-shard',
    link: 'https://dotabuff.com/assets/items/refresher-shard.jpg',
    tooltip: 'https://dotabuff.com/items/refresher-shard/tooltip',
    name_loc: 'Refresher Shard',
    price: '1,000',
    desc: {
      use: 'Use: Reset Cooldowns',
      use_desc:
        "Resets the cooldowns of all your items and abilities. Shares a cooldown with Refresher Orb. This item's cooldown only progresses in your hero's main inventory.",
      cooldown: '180',
      manacost: '200',
      notes: 'Refresher Shard is shareable.',
      lore: "Across an epoch of endless battle, the Immortal's will to triumph never faltered.",
      shop: 'Available at Home Shop',
      basic_desc:
        "Use: Reset CooldownsResets the cooldowns of all your items and abilities. Shares a cooldown with Refresher Orb. This item's cooldown only progresses in your hero's main inventory.",
    },
  },
  {
    id: 292,
    name: 'stygian-desolator',
    link: 'https://dotabuff.com/assets/items/stygian-desolator.jpg',
    tooltip: 'https://dotabuff.com/items/stygian-desolator/tooltip',
    name_loc: 'Stygian Desolator',
    desc: {
      passive:
        "Passive: Greater Corruption Your attacks reduce the target's armor by -10 for 7.0 seconds.",
      passive_desc:
        "Your attacks reduce the target's armor by -10 for 7.0 seconds.",
      stats: ['+ 60 Damage'],
      notes: 'Armor reduction works on buildings.',
      lore: 'The original demonic favorite that served as basis for the beloved mortal design.',
      basic_desc:
        "Passive: Greater Corruption Your attacks reduce the target's armor by -10 for 7.0 seconds.",
    },
  },
  {
    id: 635,
    name: 'helm-of-the-overlord',
    link: 'https://dotabuff.com/assets/items/helm-of-the-overlord.jpg',
    tooltip: 'https://dotabuff.com/items/helm-of-the-overlord/tooltip',
    name_loc: 'Helm of the Overlord',
    price: '6,400',
    desc: {
      active_desc:
        "Takes control of one neutral target unit and sets its movement speed to 380 and max health to a minimum of 1800. Also provides the unit with +70 base attack damage, +12 health regen, +4 mana regen and +7 armor. Dominated units with a max health of greater than 1800 retain their original max health.  Dominated unit's bounty is set to 250 gold.Range: 700",
      active: 'Active: Dominate',
      passive:
        "Passive: Vladmir's AuraGrants 20% lifesteal, 18% bonus damage, 2 mana regeneration, and 3.0 armor to nearby allies.",
      passive_desc:
        'Grants 20% lifesteal, 18% bonus damage, 2 mana regeneration, and 3.0 armor to nearby allies.',
      cooldown: '45',
      notes:
        'Can dominate up to two at a time. Can also Dominate enemy lane creeps and summoned units.Selling will cause dominated units to die.',
      lore: 'The powerful headpiece of a dead necromancer.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: "Vladmir's Offering",
          icon: 'https://dotabuff.com/assets/items/vladmirs-offering.jpg',
          cost: '2,450',
        },
        {
          title: 'Helm of the Dominator',
          icon: 'https://dotabuff.com/assets/items/helm-of-the-dominator.jpg',
          cost: '2,625',
        },
        {
          title: 'Recipe: Helm of the Overlord',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,325',
        },
      ],
      basic_desc:
        "Active: DominateTakes control of one neutral target unit and sets its movement speed to 380 and max health to a minimum of 1800. Also provides the unit with +70 base attack damage, +12 health regen, +4 mana regen and +7 armor. Dominated units with a max health of greater than 1800 retain their original max health.  Dominated unit's bounty is set to 250 gold.Range: 700",
    },
  },
  {
    id: 366,
    name: 'apex',
    link: 'https://dotabuff.com/assets/items/apex.jpg',
    tooltip: 'https://dotabuff.com/items/apex/tooltip',
    name_loc: 'Apex',
    desc: {
      notes:
        'Grants +%primary_stat_universal% to each attribute for Universal Heroes.',
      lore: 'Three orbs of remarkable power bound within a single scepter.',
    },
  },
  {
    id: 372,
    name: 'pirate-hat',
    link: 'https://dotabuff.com/assets/items/pirate-hat.jpg',
    tooltip: 'https://dotabuff.com/items/pirate-hat/tooltip',
    name_loc: 'Pirate Hat',
    desc: {
      active_desc: 'Channel for 1 second. Always finds a Bounty Rune!',
      active: 'Active: Dig ',
      cooldown: '40',
      lore: 'A salty skulltopper cursed with endless good fortune.',
      basic_desc:
        'Active: Dig Channel for 1 second. Always finds a Bounty Rune!',
    },
  },
  {
    id: 301,
    name: 'mirror-shield',
    link: 'https://dotabuff.com/assets/items/mirror-shield.jpg',
    tooltip: 'https://dotabuff.com/items/mirror-shield/tooltip',
    name_loc: 'Mirror Shield',
    desc: {
      passive:
        'Passive: Echo Shield Block and reflect most targeted spells back to their caster once every 12.0 seconds.',
      passive_desc:
        'Block and reflect most targeted spells back to their caster once every 12.0 seconds.',
      stats: ['+ 10 All Attributes'],
      lore: 'The shield that long ago robbed the old one of his first memories.',
      basic_desc:
        'Passive: Echo Shield Block and reflect most targeted spells back to their caster once every 12.0 seconds.',
    },
  },
  {
    id: 370,
    name: 'book-of-the-dead',
    link: 'https://dotabuff.com/assets/items/book-of-the-dead.jpg',
    tooltip: 'https://dotabuff.com/items/book-of-the-dead/tooltip',
    name_loc: 'Book of the Dead',
    desc: {
      active_desc:
        'Summon 2 sets of Level 3 Necronomicon Units that last 75.0 seconds. Units have 100% more health and 75% more damage.',
      active: 'Active: Greater Demonic Summoning ',
      cooldown: '80',
      stats: ['+ 30 Strength', '+ 30 Intelligence'],
      lore: 'A record of the final reckoning. With one page torn out.',
      basic_desc:
        'Active: Greater Demonic Summoning Summon 2 sets of Level 3 Necronomicon Units that last 75.0 seconds. Units have 100% more health and 75% more damage.',
    },
  },
  {
    id: 371,
    name: 'fallen-sky',
    link: 'https://dotabuff.com/assets/items/fallen-sky.jpg',
    tooltip: 'https://dotabuff.com/items/fallen-sky/tooltip',
    name_loc: 'Fallen Sky',
    desc: {
      active_desc:
        'Transform into a meteor that strikes down at the target area after 1 seconds in a 315 AoE, stunning enemies for 1.6 seconds and dealing impact damage. Continues to deal damage every 1.0 seconds to enemy units and buildings for 6 seconds.Building Impact Damage: 75 Building Over Time Damage: 60 Non-Building Impact Damage: 150 Non-Building Over Time Damage: 60 Range: 1200',
      active: 'Active: Fallen Sky ',
      cooldown: '15',
      lore: 'One of the few surviving creations of the acolytes of the Wyrmforge.',
      basic_desc:
        'Active: Fallen Sky Transform into a meteor that strikes down at the target area after 1 seconds in a 315 AoE, stunning enemies for 1.6 seconds and dealing impact damage. Continues to deal damage every 1.0 seconds to enemy units and buildings for 6 seconds.Building Impact Damage: 75 Building Over Time Damage: 60 Non-Building Impact Damage: 150 Non-Building Over Time Damage: 60 Range: 1200',
    },
  },
  {
    id: 374,
    name: 'ex-machina',
    link: 'https://dotabuff.com/assets/items/ex-machina.jpg',
    tooltip: 'https://dotabuff.com/items/ex-machina/tooltip',
    name_loc: 'Ex Machina',
    desc: {
      active_desc: 'Reset the cooldown on all items (except Refresher Orb).',
      active: 'Active: Reset Cooldowns ',
      cooldown: '25',
      manacost: '350',
      stats: ['+ 20 Armor'],
      lore: 'The remains of an ancient universe, preserved within a single sphere.',
      basic_desc:
        'Active: Reset Cooldowns Reset the cooldown on all items (except Refresher Orb).',
    },
  },
  {
    id: 294,
    name: 'seer-stone',
    link: 'https://dotabuff.com/assets/items/seer-stone.jpg',
    tooltip: 'https://dotabuff.com/items/seer-stone/tooltip',
    name_loc: 'Seer Stone',
    desc: {
      active_desc: 'Reveal a target 800 area of the map for 6.0 seconds.',
      active: 'Active: Reveal ',
      cooldown: '60',
      stats: [
        '+ 350 Cast Range',
        '+ 350 Bonus Vision',
        '+ 10 Mana Regeneration',
      ],
      lore: 'The curious creation of a wizard who professed to hail from another time.',
      basic_desc:
        'Active: Reveal Reveal a target 800 area of the map for 6.0 seconds.',
    },
  },
  {
    id: 911,
    name: 'revenants-brooch',
    link: 'https://dotabuff.com/assets/items/revenants-brooch.jpg',
    tooltip: 'https://dotabuff.com/items/revenants-brooch/tooltip',
    name_loc: "Revenant's Brooch",
    price: '6,200',
    desc: {
      active_desc:
        'Increases attack speed by 60 and your next 5 attacks have True Strike and deal magic damage. Expires after 15 seconds. Can attack Ethereal units and deals no damage to Magic Immune targets.',
      active: 'Active: Phantom Province',
      passive:
        'Passive: Witch Blade Causes your next attack to apply a poison for 4 seconds, slowing by 25% and dealing 1x your intelligence as damage every second. Can only trigger once every 9 seconds.',
      passive_desc:
        'Causes your next attack to apply a poison for 4 seconds, slowing by 25% and dealing 1x your intelligence as damage every second. Can only trigger once every 9 seconds.',
      cooldown: '25',
      manacost: '300',
      lore: 'The cursed brooch of a fallen guardian who stalks forever between the veil of life and death.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Mystic Staff',
          icon: 'https://dotabuff.com/assets/items/mystic-staff.jpg',
          cost: '2,800',
        },
        {
          title: 'Witch Blade',
          icon: 'https://dotabuff.com/assets/items/witch-blade.jpg',
          cost: '2,600',
        },
        {
          title: "Recipe: Revenant's Brooch",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '800',
        },
      ],
      basic_desc:
        'Active: Phantom ProvinceIncreases attack speed by 60 and your next 5 attacks have True Strike and deal magic damage. Expires after 15 seconds. Can attack Ethereal units and deals no damage to Magic Immune targets.',
    },
  },
  {
    id: 291,
    name: 'force-boots',
    link: 'https://dotabuff.com/assets/items/force-boots.jpg',
    tooltip: 'https://dotabuff.com/items/force-boots/tooltip',
    name_loc: 'Force Boots',
    desc: {
      active_desc:
        'Dispels the user and pushes them 750 units in the direction they are facing.Dispel Type: Basic Dispel',
      active: 'Active: Force',
      passive:
        'Passive: Speed Unlock Completely removes the speed limit for the wearer ',
      passive_desc: 'Completely removes the speed limit for the wearer',
      cooldown: '8',
      manacost: '75',
      stats: ['+ 115 Movement Speed', '+ 30 Health Regeneration'],
      lore: 'Elusive marvels never successfully studied for proper classification in the archives.',
      basic_desc:
        'Active: ForceDispels the user and pushes them 750 units in the direction they are facing.Dispel Type: Basic Dispel',
    },
  },
  {
    id: 678,
    name: 'giants-ring',
    link: 'https://dotabuff.com/assets/items/giants-ring.jpg',
    tooltip: 'https://dotabuff.com/items/giants-ring/tooltip',
    name_loc: "Giant's Ring",
    desc: {
      passive:
        "Passive: Giant's FootCan path over any terrain and deals 100% of your strength per second to units you are standing ontop of.",
      passive_desc:
        'Can path over any terrain and deals 100% of your strength per second to units you are standing ontop of.',
      stats: ['+ 35 Strength', '+ 50 Movement Speed', '+ 60% Model Scale'],
      lore: 'Prized procurement of an otherwise unremarkable ruler of Elze who abdicated his position and vanished.',
      basic_desc:
        "Passive: Giant's FootCan path over any terrain and deals 100% of your strength per second to units you are standing ontop of.",
    },
  },
  {
    id: 725,
    name: 'aghanims-shard-roshan',
    link: 'https://dotabuff.com/assets/items/aghanims-shard-roshan.jpg',
    tooltip: 'https://dotabuff.com/items/aghanims-shard-roshan/tooltip',
    name_loc: "Aghanim's Shard - Roshan",
    price: '1,400',
    desc: {
      passive:
        'Passive: Ability UpgradeUpgrades an existing ability or adds a new ability to your hero..',
      passive_desc:
        'Upgrades an existing ability or adds a new ability to your hero..',
      lore: 'With origins known only to a single wizard, fragments of this impossible crystal are nearly as coveted as the renowned scepter itself.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Passive: Ability UpgradeUpgrades an existing ability or adds a new ability to your hero..',
    },
  },
  {
    id: 677,
    name: 'book-of-shadows',
    link: 'https://dotabuff.com/assets/items/book-of-shadows.jpg',
    tooltip: 'https://dotabuff.com/items/book-of-shadows/tooltip',
    name_loc: 'Book of Shadows',
    desc: {
      active_desc:
        'Target an enemy, ally or self. Causes the target to become untargetable but also silenced, muted and disarmed for 4 seconds. Applies a Basic Dispel.',
      active: 'Active: Shadows',
      cooldown: '8',
      lore: 'An impossible tome filled with unreadable prose of unknowable thoughts.',
      basic_desc:
        'Active: ShadowsTarget an enemy, ally or self. Causes the target to become untargetable but also silenced, muted and disarmed for 4 seconds. Applies a Basic Dispel.',
    },
  },
  {
    id: 829,
    name: 'arcanists-armor',
    link: 'https://dotabuff.com/assets/items/arcanists-armor.jpg',
    tooltip: 'https://dotabuff.com/items/arcanists-armor/tooltip',
    name_loc: "Arcanist's Armor",
    desc: {
      active_desc:
        'Force Field Aura Grants 40% Damage Reflection for 5 seconds.',
      active: 'Active: Mega Shield ',
      passive:
        'Passive: Shield Grants +5 armor and +20% Magic Resistance to all other allies within 1200 radius.',
      passive_desc:
        'Grants +5 armor and +20% Magic Resistance to all other allies within 1200 radius.',
      cooldown: '20',
      lore: 'An exquisite piece commissioned by a paranoid monarch who choked on a piece of fruit long before the item saw its intended use.',
      basic_desc:
        'Active: Mega Shield Force Field Aura Grants 40% Damage Reflection for 5 seconds.',
    },
  },
  {
    id: 367,
    name: 'ballista',
    link: 'https://dotabuff.com/assets/items/ballista.jpg',
    tooltip: 'https://dotabuff.com/items/ballista/tooltip',
    name_loc: 'Ballista',
    desc: {
      passive:
        'Passive: Knockback Knocks back enemies 50.0 distance and deals 50 pure damage with every attack.',
      passive_desc:
        'Knocks back enemies 50.0 distance and deals 50 pure damage with every attack.',
      stats: ['+ 250 Attack Range (Ranged Only)'],
      lore: "A simple design much improved by a master smith's loving hand.",
      basic_desc:
        'Passive: Knockback Knocks back enemies 50.0 distance and deals 50 pure damage with every attack.',
    },
  },
  {
    id: 45,
    name: 'animal-courier',
    link: 'https://dotabuff.com/assets/items/animal-courier.jpg',
    tooltip: 'https://dotabuff.com/items/animal-courier/tooltip',
    name_loc: 'Animal Courier',
    price: '50',
    desc: {
      use: 'Use: Deploy Courier ',
      use_desc:
        "Deploys a creature to carry items to and from your team's base.",
      lore: 'Losing the courier is punishable by death.',
      shop: 'Available at Home Shop',
      basic_desc:
        "Use: Deploy Courier Deploys a creature to carry items to and from your team's base.",
    },
  },
  {
    id: 327,
    name: 'helm-of-the-undying',
    link: 'https://dotabuff.com/assets/items/helm-of-the-undying.jpg',
    tooltip: 'https://dotabuff.com/items/helm-of-the-undying/tooltip',
    name_loc: 'Helm of the Undying',
    desc: {
      passive:
        'Passive: Death Delay Survive for an extra 5.0 seconds after receiving a killing blow.',
      passive_desc:
        'Survive for an extra 5.0 seconds after receiving a killing blow.',
      stats: ['+ 6 Armor'],
      basic_desc:
        'Passive: Death Delay Survive for an extra 5.0 seconds after receiving a killing blow.',
    },
  },
  {
    id: 368,
    name: 'woodland-striders',
    link: 'https://dotabuff.com/assets/items/woodland-striders.jpg',
    tooltip: 'https://dotabuff.com/items/woodland-striders/tooltip',
    name_loc: 'Woodland Striders',
    desc: {
      active_desc:
        'Create a path of trees behind you for 3.0 seconds. Trees last up to 15.0 seconds.',
      active: 'Active: Woodland Stride  ',
      passive:
        'Passive: Tree Walking Removes movement speed limit and allows free pathing through trees.',
      passive_desc:
        'Removes movement speed limit and allows free pathing through trees.',
      cooldown: '20',
      stats: ['+ 140 Movement Speed', '+ 60 Health Regeneration'],
      basic_desc:
        'Active: Woodland Stride Create a path of trees behind you for 3.0 seconds. Trees last up to 15.0 seconds. ',
    },
  },
  {
    id: 305,
    name: 'royal-jelly',
    link: 'https://dotabuff.com/assets/items/royal-jelly.jpg',
    tooltip: 'https://dotabuff.com/items/royal-jelly/tooltip',
    name_loc: 'Royal Jelly',
    desc: {
      use: 'Use: Consume ',
      use_desc:
        'Grants a target allied unit a permanent buff that provides +2.25 Health Regen and +1.25 Mana Regen.Does not stack on the same unit.',
      lore: "To those who harvest olgru jelly, success serves more than mere profit--it's often the means to survival--for only the jelly itself can cure the ravages that follow a sting from the vigilant denizens of the giant hives.",
      basic_desc:
        'Use: Consume Grants a target allied unit a permanent buff that provides +2.25 Health Regen and +1.25 Mana Regen.Does not stack on the same unit.',
    },
  },
  {
    id: 1029,
    name: 'super-blink-dagger',
    link: 'https://dotabuff.com/assets/items/super-blink-dagger.jpg',
    tooltip: 'https://dotabuff.com/items/super-blink-dagger/tooltip',
    name_loc: 'Super Blink Dagger',
    price: '1200',
    desc: {
      active_desc: 'Teleport to a target point up to 1200 units away.',
      active: 'Active: Blink ',
      cooldown: '15',
      lore: 'The fabled dagger used by the fastest assassin ever to walk the lands.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Active: Blink Teleport to a target point up to 1200 units away.',
    },
  },
  {
    id: 369,
    name: 'trident',
    link: 'https://dotabuff.com/assets/items/trident.jpg',
    tooltip: 'https://dotabuff.com/items/trident/tooltip',
    name_loc: 'Trident',
    desc: {
      stats: [
        '+ 30 Strength',
        '+ 30 Agility',
        '+ 30 Intelligence',
        '+ 30% Status Resistance',
        '+ 30 Attack Speed',
        '+ 10% Movement Speed',
        '+ 30% Health Regen and Lifesteal Amp',
        '+ 30% Mana Regen Amplification',
        '+ 30% Spell Amplification',
        '+ 30 Magic Damage Attack',
      ],
      builds_from: [
        {
          title: 'Sange',
          icon: 'https://dotabuff.com/assets/items/sange.jpg',
          cost: '2,050',
        },
        {
          title: 'Yasha',
          icon: 'https://dotabuff.com/assets/items/yasha.jpg',
          cost: '2,050',
        },
        {
          title: 'Kaya',
          icon: 'https://dotabuff.com/assets/items/kaya.jpg',
          cost: '2,050',
        },
        {
          title: 'Recipe: Trident',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1',
        },
      ],
      basic_desc: 'Combines Sange, Yasha and Kaya together.',
    },
  },
  {
    id: 727,
    name: 'aghanims-blessing-roshan',
    link: 'https://dotabuff.com/assets/items/aghanims-blessing-roshan.jpg',
    tooltip: 'https://dotabuff.com/items/aghanims-blessing-roshan/tooltip',
    name_loc: "Aghanim's Blessing - Roshan",
    price: '5,800',
    desc: {
      passive:
        'Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.',
      passive_desc: 'Upgrades the ultimate, and some abilities, of all heroes.',
      lore: 'The scepter of a wizard with demigod-like powers.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.',
    },
  },
  {
    id: 4204,
    name: 'healing-lotus',
    link: 'https://dotabuff.com/assets/items/healing-lotus.jpg',
    tooltip: 'https://dotabuff.com/items/healing-lotus/tooltip',
    name_loc: 'Healing Lotus',
    price: '125',
    desc: {
      use: 'Use: Eat Lotus ',
      use_desc: 'Instantly restores 125 health and mana.Range: 400',
      cooldown: '5',
      notes: 'Hold Control to use on a nearby allied hero.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Great Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/great-healing-lotus.jpg',
          cost: 'No Cost',
        },
      ],
      basic_desc:
        'Use: Eat Lotus Instantly restores 125 health and mana.Range: 400',
    },
  },
  {
    id: 328,
    name: 'mango-tree',
    link: 'https://dotabuff.com/assets/items/mango-tree.jpg',
    tooltip: 'https://dotabuff.com/items/mango-tree/tooltip',
    name_loc: 'Mango Tree',
    desc: {
      use: 'Use: Plant a Mango Tree ',
      use_desc:
        'Targets the ground to plant a mango tree that provides unlimited mango power. The tree generates Enchanted Mangoes every 60.0 seconds, and provides unobstructed vision in the area Range: 200',
      basic_desc:
        'Use: Plant a Mango Tree Targets the ground to plant a mango tree that provides unlimited mango power. The tree generates Enchanted Mangoes every 60.0 seconds, and provides unobstructed vision in the area Range: 200',
    },
  },
  {
    id: 310,
    name: 'third-eye',
    link: 'https://dotabuff.com/assets/items/third-eye.jpg',
    tooltip: 'https://dotabuff.com/items/third-eye/tooltip',
    name_loc: 'Third Eye',
    desc: {
      passive:
        'Passive: True Sight Grants the ability to see invisible units and wards to any allied vision within 500 range of its carrier. ',
      passive_desc:
        'Grants the ability to see invisible units and wards to any allied vision within 500 range of its carrier.',
      stats: ['+ 300 BONUS VISION', '+ 7 All Attributes'],
      basic_desc:
        'Passive: True Sight Grants the ability to see invisible units and wards to any allied vision within 500 range of its carrier. ',
    },
  },
  {
    id: 2190,
    name: 'dandelion-amulet',
    link: 'https://dotabuff.com/assets/items/dandelion-amulet.jpg',
    tooltip: 'https://dotabuff.com/items/dandelion-amulet/tooltip',
    name_loc: 'Dandelion Amulet',
    desc: {
      passive:
        'Passive: Magical Damage Block Every %AbilityCooldowns, blocks up to 300 magic damage from damage instances over 75 damage.',
      passive_desc:
        'Every %AbilityCooldowns, blocks up to 300 magic damage from damage instances over 75 damage.',
      cooldown: '12',
      basic_desc:
        'Passive: Magical Damage Block Every %AbilityCooldowns, blocks up to 300 magic damage from damage instances over 75 damage.',
    },
  },
  {
    id: 939,
    name: 'harpoon',
    link: 'https://dotabuff.com/assets/items/harpoon.jpg',
    tooltip: 'https://dotabuff.com/items/harpoon/tooltip',
    name_loc: 'Harpoon',
    price: '4,500',
    desc: {
      active_desc:
        'When targeting an enemy, fire a harpoon at them, that pulls you and the target closer together, up to 35% of the distance between you and your target. If the caster is melee, the hero and target are always pulled to within melee distance of each other.',
      active: 'Active: Draw Forth ',
      passive:
        'Passive: Echo Strike Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 1.0 seconds on each strike.',
      passive_desc:
        'Causes melee attacks to attack twice in quick succession. The double attacks apply a 100% movement slow for 1.0 seconds on each strike.',
      cooldown: '19',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Echo Sabre',
          icon: 'https://dotabuff.com/assets/items/echo-sabre.jpg',
          cost: '2,500',
        },
        {
          title: 'Recipe: Harpoon',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,000',
        },
        {
          title: 'Diadem',
          icon: 'https://dotabuff.com/assets/items/diadem.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Active: Draw Forth When targeting an enemy, fire a harpoon at them, that pulls you and the target closer together, up to 35% of the distance between you and your target. If the caster is melee, the hero and target are always pulled to within melee distance of each other.',
    },
  },
  {
    id: 4205,
    name: 'great-healing-lotus',
    link: 'https://dotabuff.com/assets/items/great-healing-lotus.jpg',
    tooltip: 'https://dotabuff.com/items/great-healing-lotus/tooltip',
    name_loc: 'Great Healing Lotus',
    price: '400',
    desc: {
      use: 'Use: Eat Lotus ',
      use_desc: 'Instantly restores 400 health and mana.Range: 400',
      cooldown: '5',
      notes: 'Hold Control to use on a nearby allied hero.',
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Greater Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/greater-healing-lotus.jpg',
          cost: 'No Cost',
        },
      ],
      builds_from: [
        {
          title: 'Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/healing-lotus.jpg',
          cost: 'No Cost',
        },
        {
          title: 'Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/healing-lotus.jpg',
          cost: 'No Cost',
        },
        {
          title: 'Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/healing-lotus.jpg',
          cost: 'No Cost',
        },
      ],
      basic_desc:
        'Use: Eat Lotus Instantly restores 400 health and mana.Range: 400',
    },
  },
  {
    id: 271,
    name: 'aghanims-blessing',
    link: 'https://dotabuff.com/assets/items/aghanims-blessing.jpg',
    tooltip: 'https://dotabuff.com/items/aghanims-blessing/tooltip',
    name_loc: "Aghanim's Blessing",
    price: '5,800',
    desc: {
      passive:
        'Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.',
      passive_desc: 'Upgrades the ultimate, and some abilities, of all heroes.',
      lore: 'The scepter of a wizard with demigod-like powers.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: "Aghanim's Scepter",
          icon: 'https://dotabuff.com/assets/items/aghanims-scepter.jpg',
          cost: '4,200',
        },
        {
          title: "Recipe: Aghanim's Blessing 2",
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,600',
        },
      ],
      basic_desc:
        'Passive: Ability UpgradeUpgrades the ultimate, and some abilities, of all heroes.',
    },
  },
  {
    id: 2193,
    name: 'gossamer-cape',
    link: 'https://dotabuff.com/assets/items/gossamer-cape.jpg',
    tooltip: 'https://dotabuff.com/items/gossamer-cape/tooltip',
    name_loc: 'Gossamer Cape',
    desc: {
      passive:
        'Passive: Sixth Sense Automatically dodge an attack from an enemy hero.',
      passive_desc: 'Automatically dodge an attack from an enemy hero.',
      cooldown: '5',
      basic_desc:
        'Passive: Sixth Sense Automatically dodge an attack from an enemy hero.',
    },
  },
  {
    id: 950,
    name: 'defiant-shell',
    link: 'https://dotabuff.com/assets/items/defiant-shell.jpg',
    tooltip: 'https://dotabuff.com/items/defiant-shell/tooltip',
    name_loc: 'Defiant Shell',
    desc: {
      passive:
        'Passive: Reciprocity  When attacked, the hero counter-attacks a target within their attack range. 5s Cooldown.',
      passive_desc:
        'When attacked, the hero counter-attacks a target within their attack range. 5s Cooldown.',
      basic_desc:
        'Passive: Reciprocity  When attacked, the hero counter-attacks a target within their attack range. 5s Cooldown.',
    },
  },
  {
    id: 2192,
    name: 'martyrs-plate',
    link: 'https://dotabuff.com/assets/items/martyrs-plate.jpg',
    tooltip: 'https://dotabuff.com/items/martyrs-plate/tooltip',
    name_loc: "Martyr's Plate",
    desc: {
      active_desc:
        'Redirect 20% of all damage dealt to your allied heroes within 900 radius towards you for 8 seconds.',
      active: 'Active: Martyrdom ',
      cooldown: '40',
      basic_desc:
        'Active: Martyrdom Redirect 20% of all damage dealt to your allied heroes within 900 radius towards you for 8 seconds.',
    },
  },
  {
    id: 1097,
    name: 'disperser',
    link: 'https://dotabuff.com/assets/items/disperser.jpg',
    tooltip: 'https://dotabuff.com/items/disperser/tooltip',
    name_loc: 'Disperser',
    price: '5,700',
    desc: {
      active_desc:
        'If targetting an enemy, slows it for 4.0 seconds. Both movement speed reduction and increase start at 100% and gradually decrease to 0 over the course of the buff duration. If targeting an ally, applies a basic dispel, and increases their movement speed by 100%, and makes them unslowable for 4.0 seconds. The movement speed buff is decreased to 0 over the course of the buff duration. Range: 600',
      active: 'Active: Suppress ',
      passive:
        'Passive: ManabreakEach attack burns 40 mana from the target, and deals 1.0 physical damage per burned mana. Burns 8 mana per attack from melee illusions and 8 mana per attack from ranged illusions. Dispel Type: Basic Dispel',
      passive_desc:
        'Each attack burns 40 mana from the target, and deals 1.0 physical damage per burned mana. Burns 8 mana per attack from melee illusions and 8 mana per attack from ranged illusions. Dispel Type: Basic Dispel',
      cooldown: '15',
      manacost: '75',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Demon Edge',
          icon: 'https://dotabuff.com/assets/items/demon-edge.jpg',
          cost: '2,200',
        },
        {
          title: 'Diffusal Blade',
          icon: 'https://dotabuff.com/assets/items/diffusal-blade.jpg',
          cost: '2,500',
        },
        {
          title: 'Recipe: Disperser',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Active: Suppress If targetting an enemy, slows it for 4.0 seconds. Both movement speed reduction and increase start at 100% and gradually decrease to 0 over the course of the buff duration. If targeting an ally, applies a basic dispel, and increases their movement speed by 100%, and makes them unslowable for 4.0 seconds. The movement speed buff is decreased to 0 over the course of the buff duration. Range: 600',
    },
  },
  {
    id: 4206,
    name: 'greater-healing-lotus',
    link: 'https://dotabuff.com/assets/items/greater-healing-lotus.jpg',
    tooltip: 'https://dotabuff.com/items/greater-healing-lotus/tooltip',
    name_loc: 'Greater Healing Lotus',
    price: '900',
    desc: {
      use: 'Use: Eat Lotus ',
      use_desc: 'Instantly restores 900 health and mana.Range: 400',
      cooldown: '5',
      notes: 'Hold Control to use on a nearby allied hero.',
      shop: 'Available at Home Shop',
      builds_from: [
        {
          title: 'Great Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/great-healing-lotus.jpg',
          cost: 'No Cost',
        },
        {
          title: 'Great Healing Lotus',
          icon: 'https://dotabuff.com/assets/items/great-healing-lotus.jpg',
          cost: 'No Cost',
        },
      ],
      basic_desc:
        'Use: Eat Lotus Instantly restores 900 health and mana.Range: 400',
    },
  },
  {
    id: 2096,
    name: 'vindicators-axe',
    link: 'https://dotabuff.com/assets/items/vindicators-axe.jpg',
    tooltip: 'https://dotabuff.com/items/vindicators-axe/tooltip',
    name_loc: "Vindicator's Axe",
    desc: {
      passive:
        'Passive: Vengeance Provides 30 damage if equipped hero is Silenced and 15 armor if equipped hero is Stunned.',
      passive_desc:
        'Provides 30 damage if equipped hero is Silenced and 15 armor if equipped hero is Stunned.',
      basic_desc:
        'Passive: Vengeance Provides 30 damage if equipped hero is Silenced and 15 armor if equipped hero is Stunned.',
    },
  },
  {
    id: 1125,
    name: 'cornucopia',
    link: 'https://dotabuff.com/assets/items/cornucopia.jpg',
    tooltip: 'https://dotabuff.com/items/cornucopia/tooltip',
    name_loc: 'Cornucopia',
    price: '1,200',
    desc: {
      shop: 'Available at Secret Shop',
      builds_into: [
        {
          title: 'Orchid Malevolence',
          icon: 'https://dotabuff.com/assets/items/orchid-malevolence.jpg',
          cost: '3,475',
        },
        {
          title: 'Refresher Orb',
          icon: 'https://dotabuff.com/assets/items/refresher-orb.jpg',
          cost: '5,000',
        },
        {
          title: "Linken's Sphere",
          icon: 'https://dotabuff.com/assets/items/linkens-sphere.jpg',
          cost: '4,600',
        },
        {
          title: 'Battle Fury',
          icon: 'https://dotabuff.com/assets/items/battle-fury.jpg',
          cost: '4,100',
        },
      ],
    },
  },
  {
    id: 1128,
    name: 'pavise',
    link: 'https://dotabuff.com/assets/items/pavise.jpg',
    tooltip: 'https://dotabuff.com/items/pavise/tooltip',
    name_loc: 'Pavise',
    price: '1,400',
    desc: {
      active_desc:
        'When cast on an ally, grants them a physical damage barrier that absorbs 300 damage. Duration: 8s Range: 1000',
      active: 'Active: Protect ',
      cooldown: '18',
      manacost: '75',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Ring of Protection',
          icon: 'https://dotabuff.com/assets/items/ring-of-protection.jpg',
          cost: '175',
        },
        {
          title: 'Void Stone',
          icon: 'https://dotabuff.com/assets/items/void-stone.jpg',
          cost: '700',
        },
        {
          title: 'Fluffy Hat',
          icon: 'https://dotabuff.com/assets/items/fluffy-hat.jpg',
          cost: '250',
        },
        {
          title: 'Recipe: Pavise',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '275',
        },
      ],
      basic_desc:
        'Active: Protect When cast on an ally, grants them a physical damage barrier that absorbs 300 damage. Duration: 8s Range: 1000',
    },
  },
  {
    id: 302,
    name: 'elixir',
    link: 'https://dotabuff.com/assets/items/elixir.jpg',
    tooltip: 'https://dotabuff.com/items/elixir/tooltip',
    name_loc: 'Elixir',
    desc: {
      use: 'Use: Consume ',
      use_desc:
        'Restores 500 health and 250 mana to the target over 6.0 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250',
      notes: 'Dispellable.',
      dispellable: 'Dispellable.',
      basic_desc:
        'Use: Consume Restores 500 health and 250 mana to the target over 6.0 seconds.If the unit is attacked by an enemy hero or Roshan, the effect is lost.Range: 250',
    },
  },
  {
    id: 1107,
    name: 'phylactery',
    link: 'https://dotabuff.com/assets/items/phylactery.jpg',
    tooltip: 'https://dotabuff.com/items/phylactery/tooltip',
    name_loc: 'Phylactery',
    price: '2,400',
    desc: {
      passive:
        'Passive: Empower Spell The next Unit Target spell you cast on an enemy deals a separate 125 bonus damage to the target, and slows them by 50% for 1.2s.',
      passive_desc:
        'The next Unit Target spell you cast on an enemy deals a separate 125 bonus damage to the target, and slows them by 50% for 1.2s.',
      cooldown: '6',
      shop: 'Available at Secret Shop',
      builds_from: [
        {
          title: 'Point Booster',
          icon: 'https://dotabuff.com/assets/items/point-booster.jpg',
          cost: '1,200',
        },
        {
          title: 'Recipe: Phylactery',
          icon: 'https://dotabuff.com/assets/items/recipe.jpg',
          cost: '200',
        },
        {
          title: 'Diadem',
          icon: 'https://dotabuff.com/assets/items/diadem.jpg',
          cost: '1,000',
        },
      ],
      basic_desc:
        'Passive: Empower Spell The next Unit Target spell you cast on an enemy deals a separate 125 bonus damage to the target, and slows them by 50% for 1.2s.',
    },
  },
  {
    id: 2093,
    name: 'tier-3-token',
    link: 'https://dotabuff.com/assets/items/tier-3-token.jpg',
    tooltip: 'https://dotabuff.com/items/tier-3-token/tooltip',
    name_loc: 'Tier 3 Token',
    desc: {
      basic_desc:
        "Activate to redeem a Tier 3 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier.",
    },
  },
  {
    id: 1123,
    name: 'blood-grenade',
    link: 'https://dotabuff.com/assets/items/blood-grenade.jpg',
    tooltip: 'https://dotabuff.com/items/blood-grenade/tooltip',
    name_loc: 'Blood Grenade',
    price: '65',
    desc: {
      use: 'Use: Throw Grenade  ',
      use_desc:
        'Throw a grenade at the target area. Enemies in the area will take 50 damage on impact, and be slowed by -15% and take 15 damage every 1s for 5 seconds. Radius 300.',
      cooldown: '10',
      shop: 'Available at Home Shop',
      basic_desc:
        'Use: Throw Grenade Throw a grenade at the target area. Enemies in the area will take 50 damage on impact, and be slowed by -15% and take 15 damage every 1s for 5 seconds. Radius 300. ',
    },
  },
  {
    id: 2094,
    name: 'tier-4-token',
    link: 'https://dotabuff.com/assets/items/tier-4-token.jpg',
    tooltip: 'https://dotabuff.com/items/tier-4-token/tooltip',
    name_loc: 'Tier 4 Token',
    desc: {
      basic_desc:
        "Activate to redeem a Tier 4 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier.",
    },
  },
  {
    id: 2097,
    name: 'duelist-gloves',
    link: 'https://dotabuff.com/assets/items/duelist-gloves.jpg',
    tooltip: 'https://dotabuff.com/items/duelist-gloves/tooltip',
    name_loc: 'Duelist Gloves',
    desc: {
      passive:
        'Passive: Boldness Grants 15 attack speed as long as there are enemy heroes within 900 units.',
      passive_desc:
        'Grants 15 attack speed as long as there are enemy heroes within 900 units.',
      basic_desc:
        'Passive: Boldness Grants 15 attack speed as long as there are enemy heroes within 900 units.',
    },
  },
  {
    id: 2092,
    name: 'tier-2-token',
    link: 'https://dotabuff.com/assets/items/tier-2-token.jpg',
    tooltip: 'https://dotabuff.com/items/tier-2-token/tooltip',
    name_loc: 'Tier 2 Token',
    desc: {
      basic_desc:
        "Activate to redeem a Tier 2 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier.",
    },
  },
  {
    id: 2091,
    name: 'tier-1-token',
    link: 'https://dotabuff.com/assets/items/tier-1-token.jpg',
    tooltip: 'https://dotabuff.com/items/tier-1-token/tooltip',
    name_loc: 'Tier 1 Token',
    desc: {
      basic_desc:
        "Activate to redeem a Tier 1 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier.",
    },
  },
  {
    id: 1124,
    name: 'spark-of-courage',
    link: 'https://dotabuff.com/assets/items/spark-of-courage.jpg',
    tooltip: 'https://dotabuff.com/items/spark-of-courage/tooltip',
    name_loc: 'Spark of Courage',
    desc: {
      passive:
        'Passive: Courage Provides 10 damage when the hero is above 50% Health, and 5 armor when they are below that threshold.',
      passive_desc:
        'Provides 10 damage when the hero is above 50% Health, and 5 armor when they are below that threshold.',
      basic_desc:
        'Passive: Courage Provides 10 damage when the hero is above 50% Health, and 5 armor when they are below that threshold.',
    },
  },
  {
    id: 1021,
    name: 'river-vial-chrome',
    link: 'https://dotabuff.com/assets/items/river-vial-chrome.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-chrome/tooltip',
    name_loc: 'River Vial: Chrome',
    price: '900',
    desc: {
      shop: 'Available at Home Shop',
      basic_desc:
        "Pour this serum into the river to transform the water into liquid chrome for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect.",
    },
  },
  {
    id: 1122,
    name: 'diadem',
    link: 'https://dotabuff.com/assets/items/diadem.jpg',
    tooltip: 'https://dotabuff.com/items/diadem/tooltip',
    name_loc: 'Diadem',
    price: '1,000',
    desc: {
      shop: 'Available at Home Shop',
      builds_into: [
        {
          title: 'Dagon',
          icon: 'https://dotabuff.com/assets/items/dagon.jpg',
          cost: '2,850',
        },
        {
          title: 'Helm of the Dominator',
          icon: 'https://dotabuff.com/assets/items/helm-of-the-dominator.jpg',
          cost: '2,625',
        },
        {
          title: 'Holy Locket',
          icon: 'https://dotabuff.com/assets/items/holy-locket.jpg',
          cost: '2,400',
        },
        {
          title: 'Harpoon',
          icon: 'https://dotabuff.com/assets/items/harpoon.jpg',
          cost: '4,500',
        },
        {
          title: 'Phylactery',
          icon: 'https://dotabuff.com/assets/items/phylactery.jpg',
          cost: '2,400',
        },
      ],
    },
  },
  {
    id: 1022,
    name: 'river-vial-dry',
    link: 'https://dotabuff.com/assets/items/river-vial-dry.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-dry/tooltip',
    name_loc: 'River Vial: Dry',
    price: '900',
    desc: {
      shop: 'Available at Home Shop',
      basic_desc:
        "Pour this serum into the river to dry up the water for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect . Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect.",
    },
  },
  {
    id: 313,
    name: 'fusion-rune',
    link: 'https://dotabuff.com/assets/items/fusion-rune.jpg',
    tooltip: 'https://dotabuff.com/items/fusion-rune/tooltip',
    name_loc: 'Fusion Rune',
    desc: {
      use: 'Use: Consume ',
      use_desc:
        'Grants the target the bonuses of every Power Rune for 50.0 seconds. Each use consumes a charge.',
      cooldown: '120',
      basic_desc:
        'Use: Consume Grants the target the bonuses of every Power Rune for 50.0 seconds. Each use consumes a charge.',
    },
  },
  {
    id: 293,
    name: 'phoenix-ash',
    link: 'https://dotabuff.com/assets/items/phoenix-ash.jpg',
    tooltip: 'https://dotabuff.com/items/phoenix-ash/tooltip',
    name_loc: 'Phoenix Ash',
    desc: {
      passive:
        'Passive: RebirthLethal damage is prevented and instead the wearer is healed to half health and non-ultimate ability cooldowns reset. Gets consumed on trigger.',
      passive_desc:
        'Lethal damage is prevented and instead the wearer is healed to half health and non-ultimate ability cooldowns reset. Gets consumed on trigger.',
      basic_desc:
        'Passive: RebirthLethal damage is prevented and instead the wearer is healed to half health and non-ultimate ability cooldowns reset. Gets consumed on trigger.',
    },
  },
  {
    id: 2095,
    name: 'tier-5-token',
    link: 'https://dotabuff.com/assets/items/tier-5-token.jpg',
    tooltip: 'https://dotabuff.com/items/tier-5-token/tooltip',
    name_loc: 'Tier 5 Token',
    desc: {
      basic_desc:
        "Activate to redeem a Tier 5 Neutral Item. The resulting neutral item isn't shareable and a hero can only redeem a single token per tier.",
    },
  },
  {
    id: 307,
    name: 'tome-of-aghanim',
    link: 'https://dotabuff.com/assets/items/tome-of-aghanim.jpg',
    tooltip: 'https://dotabuff.com/items/tome-of-aghanim/tooltip',
    name_loc: 'Tome of Aghanim',
    desc: {
      use: 'Use: Consume ',
      use_desc:
        "Temporarily grants an allied target the Aghanim's Scepter buff for 3 minutes.",
      basic_desc:
        "Use: Consume Temporarily grants an allied target the Aghanim's Scepter buff for 3 minutes.",
    },
  },
  {
    id: 4301,
    name: 'scrying-shovel',
    link: 'https://dotabuff.com/assets/items/scrying-shovel.jpg',
    tooltip: 'https://dotabuff.com/items/scrying-shovel/tooltip',
    name_loc: 'Scrying Shovel',
    price: '8',
    desc: {
      active_desc: 'Search the map for Offerings to the dead.',
      active: 'Active: Dig',
      cooldown: '8',
      lore: "You don't know where it came from, but it knows where you need to go. All you need to do is dig.",
      shop: 'Available at Home Shop',
      basic_desc: 'Active: DigSearch the map for Offerings to the dead.',
    },
  },
  {
    id: 237,
    name: 'river-vial-slime',
    link: 'https://dotabuff.com/assets/items/river-vial-slime.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-slime/tooltip',
    name_loc: 'Faerie Fire',
    price: '85',
    desc: {
      use: 'Use: Imbue ',
      use_desc: 'Instantly restores 85 health.',
      cooldown: '5',
      stats: ['+ 2 Damage'],
      lore: 'The ethereal flames from the ever-burning ruins of Kindertree ignite across realities.',
      shop: 'Available at Home Shop',
      basic_desc: 'Use: Imbue Instantly restores 85 health.',
    },
  },
  {
    id: 236,
    name: 'river-vial-electrified',
    link: 'https://dotabuff.com/assets/items/river-vial-electrified.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-electrified/tooltip',
    name_loc: 'Dragon Lance',
    desc: {
      passive:
        "Passive: Dragon's Reach Increases attack range of ranged heroes.",
      passive_desc: 'Increases attack range of ranged heroes.',
      notes: 'Passive does not stack.',
      lore: 'The forward charge of the wyvern host grants no quarter.',
      shop: 'Available at Home Shop',
      basic_desc:
        "Passive: Dragon's Reach Increases attack range of ranged heroes.",
    },
  },
  {
    id: 305,
    name: 'river-vial-oil',
    link: 'https://dotabuff.com/assets/items/river-vial-oil.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-oil/tooltip',
    name_loc: 'Recipe: Dragon Lance',
    desc: {
      shop: 'Available at Home Shop',
    },
  },
  {
    id: 1090,
    name: 'mercy-grace',
    link: 'https://dotabuff.com/assets/items/mercy-grace.jpg',
    tooltip: 'https://dotabuff.com/items/mercy-grace/tooltip',
    name_loc: 'Mercy & Grace',
    price: '300',
    desc: {
      active_desc:
        'Fires a ghostly bullet at an enemy unit or tree. When the bullet strikes it will deal 300 damage and slow the target by -100% for 0.5 seconds, then ricochet in the vector-targeted direction. The ricochet will damage all units that it passes through, stopping when it hits a hero. Heroes hit by the ricochet will be feared for 2.0 seconds in the direction of the shot.',
      active: 'Active: Dead Shot',
      cooldown: '10',
      manacost: '160',
      notes:
        "Feared enemies are phased and unslowable.The ricochet will travel %ricochet_distance_multiplier%x Dead Shot's cast range.",
      dispellable: 'Dispellable.',
      lore: 'One to deliver the body, the other to claim the soul.',
      shop: 'Available at Home Shop',
      basic_desc:
        'Active: Dead ShotFires a ghostly bullet at an enemy unit or tree. When the bullet strikes it will deal 300 damage and slow the target by -100% for 0.5 seconds, then ricochet in the vector-targeted direction. The ricochet will damage all units that it passes through, stopping when it hits a hero. Heroes hit by the ricochet will be feared for 2.0 seconds in the direction of the shot.',
    },
  },
  {
    id: 1026,
    name: 'river-vial-potion',
    link: 'https://dotabuff.com/assets/items/river-vial-potion.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-potion/tooltip',
    name_loc: 'River Vial: Potion',
    price: '900',
    desc: {
      shop: 'Available at Home Shop',
      basic_desc:
        "Pour this serum into the river to transform the water into a purple bubbling potion for 900 seconds. Using this item on the river will permanently consume one charge from your Armory supply upon expiration of the effect. Charges do not get consumed if the effect is replaced by a stronger vial before expiration. Vials can only be used if at least one charge remains in your Armory. Charges will only be used by successfully enchanting the river, and will not be consumed if the item is sold, dropped, or destroyed during a game. You can only cast a vial on the river if there's not a stronger vial already in effect.",
    },
  },
  {
    id: 1154,
    name: 'block-of-cheese',
    link: 'https://dotabuff.com/assets/items/block-of-cheese.jpg',
    tooltip: 'https://dotabuff.com/items/block-of-cheese/tooltip',
    name_loc: 'Block of Cheese',
    price: '2',
    desc: {
      use: 'Use: Scrumptious',
      use_desc: 'Try me!',
      cooldown: '40',
      lore: 'First there was the Belt of Strength. Then there were the Boots of Travel. Now, at long last, the Block of Cheese.',
      shop: 'Available at Home Shop',
      basic_desc: 'Use: ScrumptiousTry me!',
    },
  },
  {
    id: 309,
    name: 'river-vial-blood',
    link: 'https://dotabuff.com/assets/items/river-vial-blood.jpg',
    tooltip: 'https://dotabuff.com/items/river-vial-blood/tooltip',
    name_loc: 'Recipe: Aether Lens',
    desc: {
      shop: 'Available at Home Shop',
    },
  },
  {
    id: 1032,
    name: 'pocket-roshan',
    link: 'https://dotabuff.com/assets/items/pocket-roshan.jpg',
    tooltip: 'https://dotabuff.com/items/pocket-roshan/tooltip',
    name_loc: 'Pocket Roshan',
    price: '1,000',
    desc: {
      cooldown: '60',
      shop: 'Available at Home Shop',
    },
  },
  {
    id: 4300,
    name: 'beloved-memory',
    link: 'https://dotabuff.com/assets/items/beloved-memory.jpg',
    tooltip: 'https://dotabuff.com/items/beloved-memory/tooltip',
    name_loc: 'Beloved Memory',
    price: '3',
    desc: {
      active_desc:
        'Place this Offering on an Altar to honor the dead with a memory from those they left behind.',
      active: 'Active: Honor the Dead',
      cooldown: '3',
      lore: "Take joy in remembering those beloved who've passed now beyond the veil.",
      shop: 'Available at Home Shop',
      basic_desc:
        'Active: Honor the DeadPlace this Offering on an Altar to honor the dead with a memory from those they left behind.',
    },
  },
];
