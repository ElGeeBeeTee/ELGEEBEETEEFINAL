import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Topic } from './topic';
import { Comments } from './comments';

@Injectable({
  providedIn: 'root'
})
export class ThreadService {

  constructor(
    public afs: AngularFirestore,
  ) { }

  getTopics() {
    return  [new Topic("Guide to planting Azalea bushes?", "1. The best time to plant azaleas is in spring and fall. 2. Plant them in a sunny spot that gets a good amount of afternoon shade. 3. When planting azaleas, fill the hole with a 50/50 blend of existing soil and Miracle-Gro® Garden Soil for Trees & Shrubs. 4. Once planted, gently tamp the soil and water thoroughly. 5. Add a 3-inch layer of mulch, keeping it 1-2 inches away from the base of each plant. 6. Water azaleas every 5 days, soaking the roots but avoiding wetting the flowers and leaves. 7. A month after planting, begin feeding regularly with Miracle-Gro® Water Soluble Azalea, Camellia, Rhododendron Plant Food.",  "", []),
    new Topic("Where to learn CSS?", "I am very new in the field of coding, and I do know a bit of HTML, however, I heard about CSS and how it can beautify your website which is why I am interested in learning it at an advanced level. ",  "", []),
    new Topic("What are the most popular restaurants according to you?", "Comment down which restaurants are the best and the most popular, the restaurant with the most comments wins!!",  "", []),
    new Topic("How do I get into Yoga, what are the basics I need to know?", "I am in my early 60s, and I heard about how Yoga is a very good practice that can help relax your muscles and help you stay flexible and fit. I wish to know how I should start practicing Yoga and its basics.",  "", []),
    new Topic("What new trending video games should I play?", "Recently, due to the lockdown, I am pretty much at home all the time and I am bored of all the current video games I have to kill time. Please suggest below what video games should I try out which are new and trending.",  "", []),
  
  ];

}
getTopicsbyid(_id: string) {
  _id;

  return  new Topic("How to plant Azalea bushes?", "test",  "", [new Comments('my comment','username')]);
}


}