import LoginContent from "@/components/contentboxes/LoginContent";
import PageHead from "@/components/head/PageHead";
import NavigationBar from "@/components/navigation/NavigationBar";

export default function Login() {
    return(
        <>
            <PageHead pageheadline={"Login"}/>
            <LoginContent/>
            <NavigationBar/>
        </>
    )

}