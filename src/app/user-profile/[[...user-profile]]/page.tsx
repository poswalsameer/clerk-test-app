import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => < UserProfile path="/user-profile" 
appearance={{
    elements: {
        scrollBox: 'bg-black text-white',
        page: 'text-white',
        profilePage: 'text-white',
        headerTitle: 'text-white',
        profileSection: 'text-white',
        userPreview: 'text-white',
        navbar: 'bg-black text-white background-transparent',
        navbarButton: 'text-white',
    },
  }}
/>

export default UserProfilePage