import { logout } from '../../actions/logout';
import { redirect } from 'next/navigation';

export const Logout = () => {
  return (
    <form
      action={async () => {
        await logout();
        redirect('/');
      }}
    >
      <button className="text-xs" type="submit">
        Вийти із аккаунта
      </button>
    </form>
  );
};
