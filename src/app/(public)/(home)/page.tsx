import Image from "next/image";
import styles from "./page.module.css";
import { Tweet } from "./Tweet";
import { TWEETS } from "@/shared/data/tweets.data";
import { TweetForm } from "./TweetForm";

export default function Home() {
  return (
      <div>
            <h1 className="text-3xl font-bold mb-6">Home</h1>
            <TweetForm />
            <div className="space-y-6">
                {TWEETS.map(tweet => (
                <Tweet
                    key={tweet.author} 
                    tweet={tweet}/>
                ))}
          </div>
      </div>
  );
}
