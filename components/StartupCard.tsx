import {formatDate} from "@/lib/utils";
import {EyeIcon} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
    const { _createdAt, views, author: { id: authorId, name }, title, description, category, _id, image} = post;

    return (
        <>
            <li className={"startup-card group"}>

                {/*Date & Views*/}
                <div className={"flex-between"}>

                    {/*Date*/}
                    <p className={"startup_card_date"}>
                        {formatDate(_createdAt)}
                    </p>

                    {/*Views*/}
                    <div className={"flex gap-1.5"}>
                        <EyeIcon className={"size-6 text-primary"} />
                        <span className={"text-16-medium"}>{views}</span>
                    </div>
                </div>

                {/*Author, Title, Author Image*/}
                <div className="flex-between mt-5 gap-5">
                    <div className={"flex-1"}>
                        <Link href={`/user/${authorId}`}>
                            <p className="text-16-medium line-clamp-1">{name}</p>
                        </Link>

                        {/*Post Title*/}
                        <Link href={`/startup/${_id}`}>
                            <h3 className={"text-26-semibold line-clamp-1"}>
                                {title}
                            </h3>
                        </Link>
                    </div>

                    {/*Post Author Image*/}
                    <Link href={`/user/${authorId}`}>
                        <Image src={"https://placehold.co/48x48"} alt="placeholder" width={48} height={48} className={"rounded-full"} />
                    </Link>
                </div>

                {/*Description*/}
                <Link href={`/startup/${_id}`}>
                    <p className={"startup-card_desc"}>
                        {description}
                    </p>
                    <Image src={image} alt={"placeholder"} width={600} height={400} className={"startup-card_img"}/>
                </Link>
                <div className={"flex-between gap-3 mt-5"}>
                    <Link href={`/?query=${category.toLowerCase()}`}>
                        <p className={"text-16-medium"}>
                            {category}
                        </p>
                    </Link>
                    <button className={"startup-card_btn"}>
                        <Link href={`/startup/${_id}`}>
                            Details
                        </Link>
                    </button>
                </div>
            </li>
        </>
    )
}
export default StartupCard
