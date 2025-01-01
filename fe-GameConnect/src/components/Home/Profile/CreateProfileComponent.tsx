import * as React from 'react';
import { 
  type BaseError,
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi';
import { GamerProfileWithCommentsABI } from '../../../abis/GamerProfileWithComments'; // Adjust the path as necessary

const contractAddress = '0x609377Ea77aE7103Dc8dE2b98936B35f219DDA31'; // Replace with your contract address

function CreateProfileComponent() {
  const { 
    data: hash,
    error,
    isPending, 
    writeContract 
  } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault(); 
    const formData = new FormData(e.target as HTMLFormElement); 
    const username = formData.get('username') as string; 
    const bio = formData.get('bio') as string; 
    const avatar = formData.get('avatar') as string; 
    const birthday = formData.get('birthday') as string; // Assuming birthday is a string that can be converted to a timestamp

    // Ensure writeContract is a function before calling it
    if (writeContract) {
      writeContract({
        address: contractAddress,
        abi: GamerProfileWithCommentsABI,
        functionName: 'createProfile',
        args: [username, bio, avatar, BigInt(birthday)], // Assuming birthday is a timestamp
      });
    } else {
      console.error("write function is not available");
    }
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }); 

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <input name="username" placeholder="Username" required style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input name="bio" placeholder="Bio" required style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input name="avatar" placeholder="Avatar URL" required style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <input name="birthday" placeholder="Birthday (timestamp)" required style={{ marginBottom: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }} />
      <button 
        disabled={isPending} 
        type="submit" 
        style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}
      >
        {isPending ? 'Creating...' : 'Create Profile'} 
      </button>
      {hash && <div style={{ marginTop: '10px', color: '#333' }}>Transaction Hash: {hash}</div>}
      {isConfirming && <div style={{ marginTop: '10px', color: '#333' }}>Waiting for confirmation...</div>} 
      {isConfirmed && <div style={{ marginTop: '10px', color: '#4CAF50' }}>Transaction confirmed.</div>} 
      {error && (
        <div style={{ marginTop: '10px', color: 'red' }}>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  )}

export default CreateProfileComponent; 