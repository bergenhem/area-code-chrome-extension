(function(g) {
  var app = g.app = g.app || {};

  var data = [{
      state : 'Alabama',
      areaCodes : [ 205, 251, 256, 334, 938 ]
    },
    {
      state : 'Alaska',
      areaCodes: [ 907 ]
    },
    {
      state : 'American Samoa',
      areaCodes : [ 684 ]
    },
    {
      state : 'Arizona',
      areaCodes : [ 480, 520, 602, 623, 928 ]
    },
    {
      state : 'Arkansas',
    	areaCodes : [ 479, 501, 870 ]
    },
    {
      state : 'California',
    	areaCodes : [ 209, 213, 310, 323, 408,
                    415, 424, 442, 510, 530,
                    559, 562, 619, 626, 650,
                    657, 661, 707, 714, 747,
                    760, 805, 818, 831, 858,
                    909, 916, 925, 949, 951 ]
    },
    {
      state : 'Colorado',
      areaCodes : [ 303, 719, 720, 970 ]
    },
    {
      state : 'Connecticut',
      areaCodes : [ 203, 475, 860 ]
    },
    {
      state : 'Delaware',
      areaCodes: [ 302 ]
    },
    {
      state : 'Florida',
      areaCodes: [ 239, 305, 321, 352, 386,
                   407, 561, 727, 754, 772,
                   786, 813, 850, 863, 904,
                   941, 954 ]
    },
    {
      state : 'Georgia',
      areaCodes : [ 229, 404, 470, 478, 678,
                    706, 762, 770, 912 ]
    },
    {
      state : 'Guam',
      areaCodes : [ 671 ]
    },
    {
      state : 'Hawaii',
      areaCodes : [ 808 ]
    },
    {
      state : 'Idaho',
      areaCodes : [ 208 ]
    },
    {
      state : 'Illinois',
      areaCodes : [ 217, 224, 309, 312, 331,
                    618, 630, 708, 773, 779,
                    815, 847, 872 ]
    },
    {
      state : 'Indiana',
      areaCodes : [ 219, 260, 317, 574, 765,
                    812 ]
    },
    {
      state : 'Iowa',
      areaCodes : [ 319, 515, 563, 641, 712 ]
    },
    {
      state : 'Kansas',
      areaCodes : [ 316, 620, 785, 913 ]
    },
    {
      state : 'Kentucky',
      areaCodes : [ 270, 502, 606, 859 ]
    },
    {
      state : 'Louisiana',
      areaCodes : [ 225, 318, 337, 504, 985 ]
    },
    {
      state : 'Maine',
      areaCodes : [ 207 ]
    },
    {
      state : 'Maryland',
      areaCodes : [ 240, 301, 410, 443 ]
    },
    {
      state : 'Massachusetts',
      areaCodes : [ 339, 351, 413, 508, 617,
                    774, 781, 857, 978 ]
    },
    {
      state : 'Michigan',
      areaCodes : [ 231, 248, 269, 313, 517,
                    586, 616, 734, 810, 906,
                    947, 989 ]
    },
    {
      state : 'Minnesota',
      areaCodes : [ 218, 320, 507, 612, 651,
                    763, 952 ]
    },
    {
      state : 'Mississippi',
      areaCodes : [ 228, 601, 662, 769 ]
    },
    {
      state : 'Missouri',
      areaCodes : [ 314, 417, 573, 636, 660,
                    816 ]
    },
    {
      state : 'Montana',
      areaCodes : [ 406 ]
    },
    {
      state : 'Nebraska',
      areaCodes : [ 308, 402 ]
    },
    {
      state : 'Nevada',
      areaCodes : [ 702, 775 ]
    },
    { state : 'New Hampshire',
      areaCodes :	[ 603 ]
    },
    {
      state : 'New Jersey',
      areaCodes : [ 201, 551, 609, 732, 848,
                    856, 862, 908, 973 ]
    },
    {
      state : 'New Mexico',
      areaCodes :	[ 505, 575 ]
    },
    {
      state : 'New York',
      areaCodes : [ 212, 315, 347, 516, 518,
                    585, 607, 631, 646, 716,
                    718, 845, 914, 917, 929 ]
    },
    {
      state : 'North Carolina',
      areaCodes : [ 252, 336, 704, 828, 910,
                    919, 980 ]
    },
    {
      state : 'North Dakota',
      areaCodes : [ 701 ]
    },
    {
      state : 'Northern Mariana Islands',
      areaCodes : []
    },
    { state : 'Ohio',
    	areaCodes : [ 216, 234, 330, 419, 440,
                    513, 567, 614, 740, 937 ]
    },
    {
      state : 'Oklahoma',
      areaCodes : [ 405, 539, 580, 918 ]
    },
    {
      state : 'Oregon',
      areaCodes : [ 458, 503, 541, 971 ]
    },
    {
      state : 'Pennsylvania',
      areaCodes : [ 215, 267, 412, 484, 570,
                    610, 717, 724, 814, 878 ]
    },
    {
      state : 'Puerto Rico',
      areaCodes : [ 787, 939 ]
    },
    {
      state : 'Rhode Island',
      areaCodes : [ 401 ]
    },
    {
      state : 'South Carolina',
      areaCodes : [ 803, 843, 864 ]
    },
    {
      state : 'South Dakota',
      areaCodes : [ 605 ]
    },
    {
      state : 'Tennessee',
      areaCodes : [ 423, 615, 731, 865, 901,
                    931 ]
    },
    {
      state : 'Texas',
      areaCodes : [ 210, 214, 254, 281, 325,
                    361, 409, 430, 432, 469,
                    512, 682, 713, 806, 817,
                    830, 832, 903, 915, 936,
                    940, 956, 972, 979 ]
    },
    {
      state : 'Utah',
      areaCodes : [ 385, 435, 801 ]
    },
    {
      state : 'Vermont',
      areaCodes :	[ 802 ]
    },
    { state : 'Virgin Islands',
      areaCodes : [ 340 ]
    },
    {
      state : 'Virginia',
      areaCodes : [ 276, 434, 540, 571, 703, 757, 804 ]
    },
    {
      state : 'Washington',
      areaCodes : [ 206, 253, 360, 425, 509 ]
    },
    {
      state : 'Washington, DC',
      areaCodes : [ 202 ]
    },
    {
      state : 'West Virginia',
      areaCodes : [ 304, 681 ]
    },
    { state : 'Wisconsin',
      areaCodes : [ 262, 414, 608, 715, 920 ]
    },
    {
      state: 'Wyoming',
      areaCodes : [ 307 ]
    }];

  app.areaCodeList = data;

})(window);
